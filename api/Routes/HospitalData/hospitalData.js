const router = require("express").Router()
const Hospital = require("../../Models/Hospital")
const dotenv = require("dotenv")
dotenv.config()
const jwt = require('jsonwebtoken')
const { set } = require("mongoose")



router.get('/getHospList', async (req, res) => {

    try {
        if (req.query.district) {

            const data = req.query.district
            let districts = data.split("_")

            hospList = []

            for (district of districts) {
                const returnedHospList = await Hospital.find({ "hosp_address.district": district })
                for (hosp of returnedHospList) {
                    hospList.push(hosp)
                }
            }

            res.status(201).json(hospList)

        }
        else {

            let hospList = []
            const returnedHospList = await Hospital.find()
            for (hosp of returnedHospList) {
                hospList.push({ name: hosp.hosp_name, id: hosp.hosp_id, uniqueID: hosp._id })
            }
            res.status(201).json(hospList)

        }

    } catch (err) {
        res.status(201).json(err)
    }

})

router.get('/getHosp', async (req, res) => {

    const id = req.query.id

    console.log(id)

    try {

        const hosp = await Hospital.findById(id)
        res.status(201).json(hosp)

    } catch (err) {
        res.status(201).json(err)
    }

})


router.post('/updateData', async (req, res) => {

    let recievedData = req.body.data
    let hospID = req.body.hospID

    console.log(recievedData)
    const keys = Object.keys(recievedData)
    const values = Object.values(recievedData)

    try {

        let newData = {}

        keys.forEach((key, index) => {
            newData[key] = JSON.parse(values[index])
        });

        console.log(newData)

        const hosp = await Hospital.updateOne({ hosp_id: hospID }, { $set: newData })
        res.json("Updated Successfully")


    } catch (err) {
        console.log(err)
        res.json(err)
    }

})




module.exports = router
