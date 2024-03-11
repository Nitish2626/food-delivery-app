var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { userModel } from "../models/userSchema.js";
import bcrypt from "bcrypt";
import { createToken } from "../utils/tokenManager.js";
export const userSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password } = req.body;
        const userExists = yield userModel.findOne({ email });
        console.log(userExists);
        if (userExists) {
            res.status(401).send("User Exists");
        }
        else {
            const hashedPassword = yield bcrypt.hash(password, 10);
            const newUser = yield userModel.create({ username, email, password: hashedPassword });
            yield newUser.save();
            const token = createToken(newUser._id.toString(), newUser.username, newUser.email, "10d");
            const expires = new Date();
            expires.setDate(expires.getDate() + 10);
            res.cookie("Token", token, {
                path: "/",
                domain: "localhost",
                httpOnly: true,
                signed: true,
                expires
            });
            res.status(201).send({ name: newUser.username, email: newUser.email });
        }
    }
    catch (error) {
        console.log("User Signup ERROR", error);
        res.status(501).send("Internal Server Error");
    }
});
export const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const findUser = yield userModel.findOne({ email });
        if (!findUser) {
            res.status(401).send("User Not Exists");
        }
        else {
            const isPasswordCorrect = yield bcrypt.compare(password, findUser.password);
            if (!isPasswordCorrect) {
                res.status(403).send("Incorrect Password");
            }
            else {
                const token = createToken(findUser._id.toString(), findUser.username, findUser.email, "10d");
                const expires = new Date();
                expires.setDate(expires.getDate() + 10);
                res.cookie("Token", token, {
                    path: "/",
                    domain: "localhost",
                    httpOnly: true,
                    signed: true,
                    expires
                });
                res.status(200).send({ name: findUser.username, email: findUser.email });
            }
        }
    }
    catch (error) {
        console.log("User Login ERROR", error);
        res.status(501).send("Internal Server Error");
    }
});
export const userLogout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.clearCookie("Token").status(200).send("Logout Successfull");
    }
    catch (error) {
        console.log("Logout ERROR", error);
        res.status(500).send("Internal Server ERROR");
    }
});
export const verifyUser = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    if (res.locals.jwtData) {
        const user = yield userModel.findById({ _id: res.locals.jwtData.id });
        if (!user) {
            res.status(401).send("User not registered");
        }
        else {
            res.status(200).send({ name: user === null || user === void 0 ? void 0 : user.username, email: user === null || user === void 0 ? void 0 : user.email });
        }
    }
    else {
        console.log("Token in not set");
        res.status(401).send("Token not found");
    }
});
export const userOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, quantity } = req.body;
    const data = yield userModel.findByIdAndUpdate("65c74e87126c2fc6ecb7876d", { $push: { orders: { name, price, quantity } } });
    res.status(200).send(data);
});
export const userCart = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, price, quantity } = req.body;
    const data = yield userModel.findByIdAndUpdate("65c74e87126c2fc6ecb7876d", { $push: { cart: { name, price, quantity } } });
    console.log("cart", data);
    res.status(200).send(data);
});
