import { Router } from "express";
import { userLogin, userSignup } from "./routes/userRoutes.js";
export const appRouter = Router();
appRouter.post("/signup", userSignup);
appRouter.post("/login", userLogin);
// appRouter.get("/status",verifyToken,verifyUser);
