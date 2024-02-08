import { Request, Response, NextFunction } from "express";
import { userModel } from "../models/userSchema.js";

export const userSignup = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { username, email, password, userType } = req.body;
    const newUser = await userModel.create({ username, email, password, userType });
    console.log(newUser);
};