const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    name : { type:String , required:true},
    phone_no : { type:Number , required:true , unique:true },
    email_id : { type:String , sparse:true },
    user_password : { type:String , required:true },
    no_of_feedbacks : { type : Number },
    feedback : { type:Array },
    grievance : { type:Array },
    no_of_grievances : { type : Number },
})

    module.exports = mongoose.model("User", UserSchema); //will create a Schema Name User Which can be Accessed using 'new' keyword just like creating object