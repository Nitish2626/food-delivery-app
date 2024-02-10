import { Router } from "express";
import { userLogin, userSignup, verifyUser } from "./routes/userRoutes.js";
import { verifyToken } from "./utils/tokenManager.js";

export const appRouter=Router();

appRouter.post("/signup",userSignup);
appRouter.post("/login",userLogin);
appRouter.get("/status",verifyToken,verifyUser);