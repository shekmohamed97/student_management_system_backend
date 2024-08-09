import express from "express";
import { config } from "dotenv";
import cors from "cors";
import { dbConnection } from "./Database/dbConnection.js";
import adminRegisterRouter from "./Routers/AdminRegisterRouter.js";

const app=express();
config({path:"./Config/.env"});

app.use(cors({
    origin:[process.env.FRONTEND_URL ],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api/v1.1/admin",adminRegisterRouter);



dbConnection();

export default app;