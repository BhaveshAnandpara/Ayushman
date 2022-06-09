const mongoose = require("mongoose")

const HospitalSchema = new mongoose.Schema({
    Hosp_id : { type:String , required:true },
    Hosp_image : { type:String },
    Hosp_Password : { type:String , required:true },
    Hosp_Name : { type:String , required:true },
    Hosp_Address : { type:Array , required:true },
    Hosp_Type : { type:String , required:true },
    Hosp_Branch : { type:Array , required:true },
    no_of_feedbacks : { type : Number },
    Phone_No : { type:Array },
    Facilities : { type:Array , required:true },
    Inventory : { type:Array , required:true },
    no_of_grievances : { type : Number },
})

    module.exports = mongoose.model("Hospital", HospitalSchema); //will create a Schema Name Hospital Which can be Accessed using 'new' keyword just like creating object