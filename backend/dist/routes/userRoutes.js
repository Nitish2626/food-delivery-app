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
export const userSignup = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, email, password, userType } = req.body;
        const userExists = yield userModel.findOne({ email });
        if (userExists) {
            res.status(401).send("User Exists");
        }
        else {
            const hashedPassword = yield bcrypt.hash(password, 10);
            const newUser = yield userModel.create({ username, email, password: hashedPassword, userType });
            res.clearCookie("Token", {
                path: "/",
                domain: "localhost",
                httpOnly: true,
                signed: true
            });
            const token = createToken(newUser._id.toString(), newUser.email, "10d");
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
        console.log("ERROR", error);
    }
});
export const userLogin = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
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
                res.clearCookie("Token", {
                    path: "/",
                    domain: "localhost",
                    httpOnly: true,
                    signed: true
                });
                const token = createToken(findUser._id.toString(), findUser.email, "10d");
                const expires = new Date();
                expires.setDate(expires.getDate() + 10);
                res.cookie("Token", token, {
                    path: "/",
                    domain: "localhost",
                    httpOnly: true,
                    signed: true
                });
                res.status(200).send({ name: findUser.username, email: findUser.email });
            }
        }
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
