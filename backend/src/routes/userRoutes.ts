import { Router } from "express";
import { userCart, userLogin, userOrders, userSignup, verifyUser } from "../controllers/userControllers.js";
import { verifyToken } from "../utils/tokenManager.js";

export const userRouter=Router();

// User APIs
userRouter.post("/signup",userSignup);
userRouter.post("/login",userLogin);
userRouter.get("/status",verifyToken,verifyUser);
userRouter.post("/orders",userOrders);
userRouter.post("/cart",userCart)

