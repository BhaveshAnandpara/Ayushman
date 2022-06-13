const mongoose = require("mongoose")

const HospitalSchema = new mongoose.Schema({
    hosp_id : { type:String , required:false , unique:true},
    hosp_password : { type:String , required:false },
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
    phone_no : { type:Array },
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