const router = require("express").Router()
const Hospital = require("../Models/Hospital")
const dotenv = require("dotenv")
dotenv.config()
const jwt = require('jsonwebtoken')

router.post( '/basicInfo' , async( req,res)=>{

    const hospImage = req.body.image
    const name = req.body.name
    const address = req.body.address
    const phoneNos = req.body.phoneNos
    const state = req.body.state
    const district = req.body.district
    const pincode = req.body.pincode
    const typeOfHosp = req.body.typeOfHosp

    const newHosp = new Hospital({
        hosp_name : name,
    })


} )

module.exports = router