const router = require("express").Router()
const Hospital = require("../../Models/Hospital")
const dotenv = require("dotenv")
dotenv.config()
const jwt = require('jsonwebtoken')



router.get('/getHospList', async (req, res) => {

    try {
        const data = req.query.district
        let districts = data.split("_")

        hospList = []

            for( district of districts ){
                const returnedHospList = await Hospital.find({"hosp_address.district":district}) 
                for( hosp of returnedHospList ){
                    hospList.push(hosp)
                }
            }

        res.status(201).json(hospList)
        
    } catch (err) {
        res.status(201).json(err)
    }

})

module.exports = router
