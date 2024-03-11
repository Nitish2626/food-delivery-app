import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import { createToken } from "../utils/tokenManager.js";
import { businessModel } from "../models/businessSchema.js";
import { productsModel } from "../models/productsSchema.js";

export const businessSignup = async (
    req: Request,
    res: Response
) => {
    try {
        const { businessName, email, password } = req.body;
        const userExists = await businessModel.findOne({ email });
        if (userExists) {
            res.status(401).send("Business Exists");
        }
        else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newBusiness = await businessModel.create({ businessName, email, password: hashedPassword });
            await newBusiness.save();

            const token = createToken(newBusiness._id.toString(), newBusiness.businessName as string, newBusiness.email as string, "10d");
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
};

export const businessLogin = async (
    req: Request,
    res: Response
) => {
    try {
        const { email, password } = req.body;
        const findBusiness = await businessModel.findOne({ email });

        if (!findBusiness) {
            res.status(401).send("Not Exists");
        }
        else {
            const isPasswordCorrect = await bcrypt.compare(password, findBusiness.password as string);
            if (!isPasswordCorrect) {
                res.status(403).send("Incorrect Password");
            }
            else {
                const token = createToken(findBusiness._id.toString(), findBusiness.businessName as string, findBusiness.email as string, "10d");
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
};

export const businessLogout = async (
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

export const verifyBusiness = async (
    req: Request,
    res: Response
) => {
    if (res.locals.jwtData) {
        const business = await businessModel.findById({ _id: res.locals.jwtData.id });

        if (!business) {
            res.status(401).send("Business not registered");
        }
        else {
            res.status(200).send({ name: business?.businessName, email: business?.email });
        }
    }
    else {
        console.log("Token in not set");
        res.status(401).send("Token not found");
    }
};

export const addFood = async (
    req: Request,
    res: Response,
) => {
    try {
        const { foodName, foodImage, foodPrice, foodDiscount } = req.body;
        if (res.locals.jwtData) {
            console.log("data", res.locals.jwtData);
            const addFood = await productsModel.create({ owner: res.locals.jwtData.id, ownerName: res.locals.jwtData.name, foodName, foodImage, foodPrice, foodDiscount });
            await addFood.save();

            await businessModel.findOneAndUpdate({ _id: res.locals.jwtData.id }, { $push: { products: addFood._id } });

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
};

export const updateFood = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {

};

export const getFood = async (
    req: Request,
    res: Response
) => {
    try {
        const findFood = await productsModel.find();
        res.status(200).send(findFood);
    }
    catch (error) {
        console.log("Finding food item ERROR", error);
        res.status(501).send("Internal Server ERROR")
    }
};