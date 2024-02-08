import express from "express";
import "dotenv/config";
import { appRouter } from "./app.js";
import { dbConnection } from "./db/dbConnection.js";
import cors from "cors";
const app = express();
const port = process.env.PORT || 2000;
app.use(cors());
app.use(express.json());
app.use("/user", appRouter);
app.listen(port, () => {
    dbConnection();
    console.log("Server started at", port);
});