import express from "express";
import login from "../controllers/authController.js";

const authRoute = express.Router();

authRoute.get("/",(req,res)=>{
    res.json({ok: true})
})

authRoute.post("/",login);


export default authRoute;