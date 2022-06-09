const mongoose = require("mongoose")

const HospitalSchema = new mongoose.Schema({
    hosp_id : { type:String , required:true , unique:true},
    hosp_password : { type:String , required:true },
    hosp_profileImg : { type:String},
    hosp_name : { type:String , required:true },
    hosp_address : {
                     address_line1 : { type:String },
                     district      : { type:String , required:true }, 
                     state         : { type:String , required:true }, 
                     pincode       : { type:Number }, 
                     map_url       : { type:String }
                    },
    hosp_type : { type:String , required:true },
    hosp_branch : { type:Array , required:true },
    no_of_feedbacks : { type : Number },
    phone_no : { type:Array },
    facilities : { 
                   facility : { type:String }, 
                   icon     : { type:String } 
                 },
    inventory : { 
                 item_name:{ type:String , required:true },
                 is_for_emergency:{ type:Boolean , required:true },
                 total_amount:{ type:Number },
                 available_amount:{ type:Number },
                 cost:{ type:Number },
                 unit:{ type:String , required:true },
                 last_update:{ type:Date }
                },
    no_of_grievances : { type : Number },
})

    module.exports = mongoose.model("Hospital", HospitalSchema); //will create a Schema Name Hospital Which can be Accessed using 'new' keyword just like creating object