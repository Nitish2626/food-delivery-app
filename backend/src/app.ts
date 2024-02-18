import { Router } from "express";
import { userCart, userLogin, userOrders, userSignup, verifyUser } from "./routes/userRoutes.js";
import { verifyToken } from "./utils/tokenManager.js";

export const appRouter=Router();

appRouter.post("/signup",userSignup);
appRouter.post("/login",userLogin);
appRouter.post("/orders",userOrders);
appRouter.post("/cart",userCart)
appRouter.get("/status",verifyToken,verifyUser);