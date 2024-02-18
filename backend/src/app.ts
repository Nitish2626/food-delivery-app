import { Router } from "express";
import { userLogin, userOrders, userSignup } from "./routes/userRoutes.js";
import { verifyToken } from "./utils/tokenManager.js";

export const appRouter=Router();

appRouter.post("/signup",userSignup);
appRouter.post("/login",userLogin);
appRouter.post("/orders",userOrders);
// appRouter.get("/status",verifyToken,verifyUser);