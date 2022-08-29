const mongoose = require("mongoose")

const HospitalSchema = new mongoose.Schema({
    hosp_id : { type:String , required:false , unique:true},
    hosp_password : { type:String , required:true },
    hosp_profileImg : { type:String},
    hosp_name : { type:String , required:false },
    hosp_address : {
                     address_line1 : { type:String },
                     district      : { type:String , required:false }, 
                     state         : { type:String , required:false }, 
                     pincode       : { type:Number }, 
                     map_url       : { type:String }
                    },
    hosp_type : { type:String , required:false },
    hosp_branch : { type:Array , required:false },
    no_of_feedbacks : { type : Number },
    phone_no : { type:Array , required:false},
    facilities : { 
                   facility : { type:String }, 
                   icon     : { type:String } 
                 },
    inventory : { 
                 item_name:{ type:String , required:false },
                 is_for_emergency:{ type:Boolean , required:false },
                 total_amount:{ type:Number },
                 available_amount:{ type:Number },
                 cost:{ type:Number },
                 unit:{ type:String , required:false },
                 last_update:{ type:Date }
                },
    no_of_grievances : { type : Number },
})

    module.exports = mongoose.model("Hospital", HospitalSchema); //will create a Schema Name Hospital Which can be Accessed using 'new' keyword just like creating object



    /*

    Sample

    {
        "hosp_id":"MH1232",
        "hospImage" : " ",
        "name" : "Sevagram Hospital",
        "address" : "Dummy Road",
        "state" : "Maharashtra",
        "district" : "Wardha",
        "pincode" : 442001,
        "map_url" : "",
        "typeOfHosp" : "Semi-Government Hospital",
        "otherBranch" : [""],
        "noOfFeedbacks" : 0,
        "noOfGrievances" : 0,
        "phoneNos" : ["0000000001" , "0000000002"],
        "facilities" : [
            {
            "facility" : "Ambulance",
            "icon" : ""
            },
            {
            "facility" : "Laboratory",
            "icon" : ""
            },
            {
            "facility" : "ATM",
            "icon" : ""
            },
            {
            "facility" : "Waiting Lounge",
            "icon" : ""
            },
            {
            "facility" : "Pharmacy",
            "icon" : ""
            },
            {
            "facility" : "Cafeteria",
            "icon" : ""
            } 
        ],
        "inventory":[
            {
                "item_name":"ICU Beds",
                "is_for_emergency" : true,
                "total_amount" : 20,
                "available_amount":12,
                "cost":3000,
                "unit":"per day"
            }
        ]
    
    
    }
    */