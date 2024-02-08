import { Router } from "express";
import { userSignup } from "./routes/userRoutes.js";

export const appRouter=Router();

appRouter.post("/signup",userSignup);