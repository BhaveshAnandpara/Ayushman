const router = require("express").Router()
const Hospital = require("../Models/Hospital")
const dotenv = require("dotenv")
dotenv.config()
const jwt = require('jsonwebtoken')

router.post('/basicInfo', (req, res) => {

    const hospImage = req.body.image
    const hospID = req.body.hosp_id
    const name = req.body.name
    const addressLine = req.body.addressLine
    const phoneNos = req.body.phoneNos
    const state = req.body.state
    const district = req.body.district
    const pincode = req.body.pincode
    const map_url = req.body.mapurl
    const typeOfHosp = req.body.typeOfHosp
    const otherBranch = req.body.branch

    
    try {
    const newHosp = new Hospital({
        hosp_id: hospID,
        hosp_name: name,
        hosp_address: {
            address_line1: addressLine,
            district: district,
            state: state,
            pincode: pincode,
            map_url: map_url
        },
        hosp_profileImg: hospImage,
        host_type: typeOfHosp,
        phone_no: phoneNos,
        hosp_branch: otherBranch,
        no_of_feedbacks: " ",
        inventory: {
            item_name: " ",
            is_for_emergency: true,
            unit: " "
        }
    })
        const hosp =  newHosp.save()
        res.status(201).json("Hospital Created")
    } catch (err) {
        res.status(404).json(err)
    }

})

module.exports = router