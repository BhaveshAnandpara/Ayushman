const router = require("express").Router()
const Hospital = require("../../Models/Hospital")
const dotenv = require("dotenv")
dotenv.config()
const jwt = require('jsonwebtoken')



router.get('/getHospList', async (req, res) => {

    const state = req.query.state
    const district = req.body.district
    const name = req.body.hosp_name

    try{
        const hospList = await Hospital.find({ 'hosp_address.state' : state })
        res.status(201).json(hospList)
    }catch(err){
        res.json(err)
    }

})

module.exports = router