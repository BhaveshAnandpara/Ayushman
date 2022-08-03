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
const SECRET_KEY = process.env.SECRET_KEY

//Hospital Login

router.post('/hospLogin', async (req, res) => {

    const hospID = req.body.hospID
    const password = req.body.password

    try {
        
        try{
            const hospital = await Hospital.findOne({ hosp_id: hospID }) //Find hospital in Database by PhoneNo
            const hospPassword = hospital.hosp_password
            var bytes = CryptoJS.AES.decrypt(hospPassword, process.env.SECRET_KEY); //Decrypt the Encrypted Password
            var originalPass = bytes.toString(CryptoJS.enc.Utf8); //Original Password

            if (originalPass !== password) {
                res.status(401).json("Incorrect Password")
            }
            else {
                res.status(200).json("Login Confirmed")
            }

        }catch(err){
            res.status(401).send("Invalid Hospital ID")
        }

    } catch (err) {
        res.json("Invalid Login")
    }


})

router.post('/createHosp', async (req, res) => {

    try {
        const id = ""+Math.floor(Math.random() * 10000)
        let pass = Math.floor(Math.random() * 10000000)
        let phoneno = Math.floor(Math.random() * Math.pow(10,10))
        
        try {
            const newHosp = new Hospital({ hosp_id: id, hosp_password: CryptoJS.AES.encrypt(JSON.stringify(pass),process.env.SECRET_KEY).toString() , phone_no:[phoneno] })
            const hosp = await newHosp.save()
            res.send({hosp,pass})
        } catch (err) {
            console.log(err)
        }
    } catch (err) {
        res.json(err)
    }

})

//Get Hospital


module.exports = router