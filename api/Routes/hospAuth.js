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

        try {
            const hospital = await Hospital.findOne({ hosp_id: hospID }) //Find hospital in Database by Hosp ID
            const hospPassword = hospital.hosp_password
            var bytes = CryptoJS.AES.decrypt(hospPassword, process.env.SECRET_KEY); //Decrypt the Encrypted Password
            var originalPass = bytes.toString(CryptoJS.enc.Utf8); //Original Password

            
            if (originalPass !== JSON.stringify(password)) {
                res.status(401).json("Incorrect Password")
            }
            else {


                const accessToken = jwt.sign({ hospital }, process.env.SECRET_KEY, { expiresIn: '20m' })

                const { hosp_password, ...info } = hospital._doc
                console.log(info)

                res.status(200).json({
                    msg : "Login Sucessfull",
                    isAuthenticated: true,
                    accessToken: accessToken,
                    data: info
                })
            }

        } catch (err) {
            res.status(401).json({msg:"Error Occurred",err})

        }

    } catch (err) {
        res.json("Invalid Login")
    }


})

router.post('/createHosp', async (req, res) => {

    try {

        const hosp_id = req.body.hosp_id
        let hosp_password = req.body.password

        hosp_password = CryptoJS.AES.encrypt(JSON.stringify(hosp_password), process.env.SECRET_KEY).toString()

        try {
            const newHosp = new Hospital({ hosp_id: hosp_id, hosp_password: hosp_password })
            const hosp = await newHosp.save()
            res.send({ msg: "Hospital Created", hosp })

        } catch (err) {

            res.json({ msg: "Alreay registered ", err })

        }

    } catch (err) {
        res.json({ msg: "Error Occured ", err })
    }

})

//Get Hospital


module.exports = router