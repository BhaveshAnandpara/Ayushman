const router = require("express").Router()
const Hospital = require("../Models/Hospital")
const CryptoJS = require("crypto-js")
const dotenv = require("dotenv")
dotenv.config()
const jwt = require('jsonwebtoken')

const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN
const JWT_REFRESH_TOKEN = process.env.JWT_REFRESH_TOKEN
const crypto = require('crypto') //For Hashing

const smsKey = process.env.SMS_SECRET_KEY



router.post('/hospLogin', async (req, res) => {

    const hospID = req.body.hospID
    const password = req.body.password

    try {
        const hospital = await Hospital.findOne({ hosp_id: hospID }) //Find hospital in Database by PhoneNo
        const hospPassword = hospital.hosp_password

        // var bytes = CryptoJS.AES.decrypt(hospital.Hosp_Password, process.env.SECRET_KEY); //Decrypt the Encrypted Password
        // var originalPass = bytes.toString(CryptoJS.enc.Utf8); //Original Password


        if( hospPassword !== password ){
            res.status(401).json("Invalid Password")
        }
        else{
            res.status(401).json("Login Confirmed")
        }



    } catch (err) {
        res.json("Invalid Login")
    }


})

module.exports = router