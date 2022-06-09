const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name : { type:String },
    mobile_no : { type:Number , required:true , unique:true },
    email_id : { type:String , unique:true },
    no_of_feedbacks : { type : Number },
    feedback : { type:Array },
    grievance : { type:Array },
    no_of_grievances : { type : Number },
})