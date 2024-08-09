import express from "express";
import { adminRegister } from "../Controllers/AdminRegisterController.js";

const router=express.Router();

router.post("/register",adminRegister);

export default router;


