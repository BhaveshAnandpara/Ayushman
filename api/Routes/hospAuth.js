const router = require("express").Router()
const CryptoJS = require("crypto-js")
const dotenv = require("dotenv")
dotenv.config()
const jwt = require('jsonwebtoken')

const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN
const JWT_REFRESH_TOKEN = process.env.JWT_REFRESH_TOKEN
const crypto = require('crypto') //For Hashing

const smsKey = process.env.SMS_SECRET_KEY

router.post('/hospRegister' , async(req,res)=>{

    const hospName = req.body.name
    const password = req.body.password


})