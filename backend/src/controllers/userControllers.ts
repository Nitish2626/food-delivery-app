import { Request, Response, NextFunction } from "express";
import { userModel } from "../models/userSchema.js";
import bcrypt from "bcrypt";
import { createToken } from "../utils/tokenManager.js";

export const userSignup = async (
    req: Request,
    res: Response
) => {
    try {
        const { username, email, password } = req.body;
        const userExists = await userModel.findOne({ email });
        console.log(userExists);
        if (userExists) {
            res.status(401).send("User Exists");
        }
        else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newUser = await userModel.create({ username, email, password: hashedPassword });
            await newUser.save();

            const token = createToken(newUser._id.toString(),newUser.username as string, newUser.email as string, "10d");
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

};

export const userLogin = async (
    req: Request,
    res: Response
) => {
    try {
        const { email, password } = req.body;
        const findUser = await userModel.findOne({ email });

        if (!findUser) {
            res.status(401).send("User Not Exists");
        }
        else {
            const isPasswordCorrect = await bcrypt.compare(password, findUser.password as string);

            if (!isPasswordCorrect) {
                res.status(403).send("Incorrect Password");
            }
            else {
                const token = createToken(findUser._id.toString(),findUser.username as string, findUser.email as string, "10d");
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
};

export const userLogout = async (
    req: Request,
    res: Response
) => {
    try {
        res.clearCookie("Token").status(200).send("Logout Successfull");
    }
    catch (error) {
        console.log("Logout ERROR", error);
        res.status(500).send("Internal Server ERROR");
    }
};

export const verifyUser = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (res.locals.jwtData) {
        const user = await userModel.findById({ _id: res.locals.jwtData.id });
        if (!user) {
            res.status(401).send("User not registered");
        }
        else {
            res.status(200).send({ name: user?.username, email: user?.email });
        }
    }
    else{
        console.log("Token in not set");
        res.status(401).send("Token not found");
    }
};

export const userOrders = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, price, quantity } = req.body;
    const data = await userModel.findByIdAndUpdate("65c74e87126c2fc6ecb7876d", { $push: { orders: { name, price, quantity } } });
    res.status(200).send(data);
};

export const userCart = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const { name, price, quantity } = req.body;
    const data = await userModel.findByIdAndUpdate("65c74e87126c2fc6ecb7876d", { $push: { cart: { name, price, quantity } } });
    console.log("cart", data);
    res.status(200).send(data);
};

