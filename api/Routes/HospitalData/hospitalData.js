const router = require("express").Router()
const Hospital = require("../../Models/Hospital")
const dotenv = require("dotenv")
dotenv.config()
const jwt = require('jsonwebtoken')
const { set } = require("mongoose")



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

router.post('/updateData' , async (req,res)=>{

    let recievedData = req.body.data
    let hospID = req.body.hospID

    console.log(recievedData)
    const keys = Object.keys(recievedData)
    const values = Object.values(recievedData)

    try{
        
        let newData = {}
        
        keys.forEach((key,index) => {
            newData[key] = JSON.parse(values[index])
        });
        
        console.log(newData)

        const hosp = await Hospital.updateOne({ hosp_id  : hospID} , { $set : newData }  )
        res.json("Updated Successfully")


    }catch(err)
    {
        res.json(err)
    }

})




module.exports = router
