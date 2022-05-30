const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const authRoute = require("../api/Routes/auth")

dotenv.config();

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB COnnection Succesful"));
  }


app.use(express.json())

app.use("/api/auth" , authRoute)

app.listen( 8001 , ()=>{
    console.log( "Backend Server is Running" );
})