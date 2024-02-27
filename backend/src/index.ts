import express from "express";
import "dotenv/config";
import { dbConnection } from "./db/dbConnection.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import { userRouter } from "./routes/userRoutes.js";
import { businessRouter } from "./routes/businessRoutes.js";

const app=express();
const port=process.env.PORT || 2000;

app.use(cors({origin:"http://localhost:3000",credentials:true}));
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use("/user",userRouter);
app.use("/business",businessRouter);

app.listen(port,()=>{
    dbConnection();
    console.log("Server started at",port);
});