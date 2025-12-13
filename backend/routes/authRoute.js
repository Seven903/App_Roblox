const express = require("express")
const authControll = require("../controllers/authController")

const routh = express.Router();

routh.get("/",(req,res)=>{
    res.json({ok: true})
})

routh.post("/",authControll.login);


module.exports = routh;