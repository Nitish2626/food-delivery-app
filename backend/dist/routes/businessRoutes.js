import express from "express";
import { addFood, businessLogin, businessSignup, getFood, verifyBusiness } from "../controllers/businessControllers.js";
import { verifyToken } from "../utils/tokenManager.js";
export const businessRouter = express.Router();
// Business APIs
businessRouter.post("/signup", businessSignup);
businessRouter.post("/login", businessLogin);
businessRouter.get("/status", verifyToken, verifyBusiness);
businessRouter.post("/add", addFood);
businessRouter.put("/update");
businessRouter.get("/get", getFood);
