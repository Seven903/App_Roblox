const express = require("express")
const authControll = require("../controllers/authController")

const authRoute = express.Router();

authRoute.get("/",(req,res)=>{
    res.json({ok: true})
})

authRoute.post("/",authControll.login);


module.exports = authRoute;