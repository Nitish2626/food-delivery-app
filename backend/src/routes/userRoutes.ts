import { Request, Response, NextFunction } from "express";
import { userModel } from "../models/userSchema.js";
import bcrypt from "bcrypt";
import { createToken } from "../utils/tokenManager.js";

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

            res.clearCookie("Token",{
                path:"/",
                domain:"localhost",
                httpOnly:true,
                signed:true
            });

            const token=createToken(newUser._id.toString(),newUser.email,"10d");
            const expires=new Date();
            expires.setDate(expires.getDate() + 10);
            res.cookie("Token",token,{
                path:"/",
                domain:"localhost",
                httpOnly:true,
                signed:true,
                expires
            });
            res.status(201).send({name:newUser.username,email:newUser.email,userType:newUser.userType});
        }
    } catch (error) {
        console.log("ERROR",error);
    }

};

export const userLogin=async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    try {
        const {email,password}=req.body;
        const findUser=await userModel.findOne({email});
        if(!findUser){
            res.status(401).send("User Not Exists");
        }
        else{
            const isPasswordCorrect=await bcrypt.compare(password,findUser.password);
            if(!isPasswordCorrect){
                res.status(403).send("Incorrect Password");
            }
            else{
                res.clearCookie("Token",{
                    path:"/",
                    domain:"localhost",
                    httpOnly:true,
                    signed:true
                });
                const token=createToken(findUser._id.toString(),findUser.email,"10d");
                const expires=new Date();
                expires.setDate(expires.getDate() + 10);
                res.cookie("Token",token,{
                    path:"/",
                    domain:"localhost",
                    httpOnly:true,
                    signed:true,
                    expires
                });
                res.status(200).send({name:findUser.username,email:findUser.email,userType:findUser.userType});
            }
        }
    } catch (error) {
        console.log("ERROR",error);
    }
};

export const verifyUser=async(
    req:Request,
    res:Response,
    next:NextFunction
)=>{
    const user=await userModel.findById({_id:res.locals.jwtData.id});
    console.log("user",user);
    if(!user){
        res.status(401).send("User not registered");
    }
    else{
        res.status(200).send({name:user?.username,email:user?.email,userType:user?.userType});
    }
};