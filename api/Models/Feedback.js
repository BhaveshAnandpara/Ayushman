const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    mobile_no : { type:Number , required:true , unique:true },
    hospital_name : { type:String , required:true },
    admission_date : { type:Number , required:true },
    discharge_date : { type:Number , required:true },
    parameter_01 : { type:Number , required:true },
    parameter_02 : { type:Number , required:true },
    parameter_03 : { type:Number , required:true },
    parameter_04 : { type:Number , required:true },
    parameter_05 : { type:Number , required:true },
    average_score : { type:Number }
})