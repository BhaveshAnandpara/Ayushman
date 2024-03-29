const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const cookiePasrser = require('cookie-parser')
const cors = require("cors");

// res.header( "Access-Control-Allow-Origin" );

const authRoute = require("../api/Routes/auth")
const hospAuthRoute = require("../api/Routes/hospAuth")
const hospital = require("../api/Routes/hospital")
const hospitalData = require("../api/Routes/HospitalData/hospitalData")

dotenv.config();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "x-access-token, Origin, X-Requested-With, Content-Type, Accept");
  next();
});


main().catch(err => console.log(err));

async function main() {
    await mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB COnnection Succesful"));
  }


app.use(express.json())
app.use(cookiePasrser())

app.use("/auth" , authRoute)
app.use("/hospAuth" , hospAuthRoute)
app.use("/hospital" , hospital)
app.use("/hospitalData" , hospitalData)

app.listen( 8001 , ()=>{
    console.log( "Backend Server is Running" );
})