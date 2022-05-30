const router = require("express").Router()
const User = require("../Models/User")


router.post("/login" , async (req,res)=>{
    res.status(200).json("I am in Login")
})

module.exports = router