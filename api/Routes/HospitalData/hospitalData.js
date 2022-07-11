const router = require("express").Router()
const Hospital = require("../../Models/Hospital")
const dotenv = require("dotenv")
dotenv.config()
const jwt = require('jsonwebtoken')



router.get('/getHospList', async (req, res) => {

    try {
        const state = req.query.state
        const district = req.query.district
        const name = req.body.hosp_name

        hospList = []
        stateArr = state.split("_")
        for( stateEle of stateArr){
            const hosp = await Hospital.find({"hosp_address.state":stateEle})
            for( ele of hosp){
                hospList.push(ele)
            }
        }
        res.status(201).json(hospList)
        
    } catch (err) {
        // res.status(201).json(err)
        console.log(err)
    }

})

module.exports = router
