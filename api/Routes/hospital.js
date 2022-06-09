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
    const map_url = req.body.mapurl
    const typeOfHosp = req.body.typeOfHosp
    const otherBranch = req.body.branch

    const newHosp = new Hospital({
        hosp_name : name,
        hosp_address : {
            address_line1 : address,
            district : district,
            state : state,
            pincode : pincode,
            map_url : map_url   
            }, 
        hosp_profileImg : hospImage,
        host_type : typeOfHosp,
        phone_no  : phoneNos, 
        hosp_branch : otherBranch
    })


} )

module.exports = router