import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const createToken = (id: string, name: string, expiresIn: string) => {
    const payload = { id, name };
    const token = jwt.sign(payload, `${process.env.JWT_SECRET}`, {
        expiresIn
    });
    return token;
};

export const verifyToken = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const token = await req.signedCookies["Token"];

    if (!token || token.trim() === "") {
        // res.status(401).send("Token not Received");
        console.log("Token not received");
        next();
    }
    else {
        const verified = jwt.verify(token, process.env.JWT_SECRET as string);
        console.log("ver", verified);
        if (verified) {
            res.locals.jwtData = verified;
        }
        else {
            console.log("Token expired");
        }
        next();
    }
};