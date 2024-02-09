import { Request, Response, NextFunction } from "express";
import { userModel } from "../models/userSchema.js";
import bcrypt from "bcrypt";

export const userSignup = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    try {
        const { username, email, password, userType } = req.body;
        const userExists = await userModel.findOne({ email });
        if (userExists) {
            res.status(401).send("User Exists");
        }
        else{
            const hashedPassword=await bcrypt.hash(password,10);
            const newUser = await userModel.create({ username, email, password:hashedPassword, userType });
            res.status(201).send({name:newUser.username,email:newUser.email});
        }
    } catch (error) {
        console.log("ERROR",error);
    }

};