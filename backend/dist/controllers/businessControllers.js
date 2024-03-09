var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import bcrypt from "bcrypt";
import { createToken } from "../utils/tokenManager.js";
import { businessModel } from "../models/businessSchema.js";
import { productsModel } from "../models/productsSchema.js";
export const businessSignup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { businessName, email, password } = req.body;
        const userExists = yield businessModel.findOne({ email });
        if (userExists) {
            res.status(401).send("Business Exists");
        }
        else {
            const hashedPassword = yield bcrypt.hash(password, 10);
            const newBusiness = yield businessModel.create({ businessName, email, password: hashedPassword });
            yield newBusiness.save();
            const token = createToken(newBusiness._id.toString(), newBusiness.businessName, "10d");
            const expires = new Date();
            expires.setDate(expires.getDate() + 10);
            res.cookie("Token", token, {
                path: "/",
                domain: "localhost",
                httpOnly: true,
                signed: true,
                expires
            });
            res.status(201).send({ name: newBusiness.businessName, email: newBusiness.email });
        }
    }
    catch (error) {
        console.log("Business Signup ERROR", error);
        res.status(501).send("Internal Server Error");
    }
});
export const businessLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const findBusiness = yield businessModel.findOne({ email });
        if (!findBusiness) {
            res.status(401).send("Not Exists");
        }
        else {
            const isPasswordCorrect = yield bcrypt.compare(password, findBusiness.password);
            if (!isPasswordCorrect) {
                res.status(403).send("Incorrect Password");
            }
            else {
                const token = createToken(findBusiness._id.toString(), findBusiness.businessName, "10d");
                const expires = new Date();
                expires.setDate(expires.getDate() + 10);
                res.cookie("Token", token, {
                    path: "/",
                    domain: "localhost",
                    httpOnly: true,
                    signed: true,
                    expires
                });
                res.status(200).send({ name: findBusiness.businessName, email: findBusiness.email });
            }
        }
    }
    catch (error) {
        console.log("User Login ERROR", error);
        res.status(501).send("Internal Server Error");
    }
});
export const businessLogout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.clearCookie("Token").status(200).send("Logout Successfull");
    }
    catch (error) {
        console.log("Logout ERROR", error);
        res.status(500).send("Internal Server ERROR");
    }
});
export const verifyBusiness = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (res.locals.jwtData) {
        const business = yield businessModel.findById({ _id: res.locals.jwtData.id });
        if (!business) {
            res.status(401).send("Business not registered");
        }
        else {
            res.status(200).send({ name: business === null || business === void 0 ? void 0 : business.businessName, email: business === null || business === void 0 ? void 0 : business.email });
        }
    }
    else {
        console.log("Token in not set");
        res.status(401).send("Token not found");
    }
});
export const addFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { foodName, foodImage, foodPrice, foodDiscount } = req.body;
        if (res.locals.jwtData) {
            console.log("data", res.locals.jwtData);
            const addFood = yield productsModel.create({ owner: res.locals.jwtData.id, ownerName: res.locals.jwtData.name, foodName, foodImage, foodPrice, foodDiscount });
            yield addFood.save();
            yield businessModel.findOneAndUpdate({ _id: res.locals.jwtData.id }, { $push: { products: addFood._id } });
            res.status(200).send(addFood);
        }
        else {
            console.log("User not registered");
            res.status(401).send("User not found");
        }
    }
    catch (error) {
        console.log("Adding Food Item ERROR", error);
        res.status(501).send("Internal Server Error");
    }
});
export const updateFood = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
});
export const getFood = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const findFood = yield productsModel.find();
        res.status(200).send(findFood);
    }
    catch (error) {
        console.log("Finding food item ERROR", error);
        res.status(501).send("Internal Server ERROR");
    }
});
