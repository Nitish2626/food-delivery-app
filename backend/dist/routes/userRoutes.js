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
            res.status(201).send({ name: newUser.username, email: newUser.email });
        }
    }
    catch (error) {
        console.log("ERROR", error);
    }
});
