const router = require("express").Router()
const Hospital = require("../../Models/Hospital")
const dotenv = require("dotenv")
dotenv.config()
const jwt = require('jsonwebtoken')



router.get('/getHospList', async (req, res) => {

    try {
        const data = req.body

        hospList = []
        for( dataElement of data ){
            for( district of dataElement.district ){
                const returnedHospList = await Hospital.find({"hosp_address.state":dataElement.state , "hosp_address.district":district}) 
                for( hosp of returnedHospList ){
                    hospList.push(hosp)
                }
            }
        }

        res.status(201).json(hospList)
        
    } catch (err) {
        res.status(201).json(err)
    }

})

module.exports = router
