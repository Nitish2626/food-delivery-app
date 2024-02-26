import express from "express";
import { businessRouter } from "./routes/businessRoutes.js";
import { userRouter } from "./routes/userRoutes.js";

export const appRouter=express.Router();

appRouter.use("/user",userRouter);
appRouter.use("/business",businessRouter);