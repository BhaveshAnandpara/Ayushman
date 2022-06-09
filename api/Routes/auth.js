const router = require("express").Router()
const User = require("../Models/User")
const CryptoJS = require("crypto-js")
const dotenv = require("dotenv")
dotenv.config()
const jwt = require('jsonwebtoken')
let refreshTokens = []


const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN
const client = require('twilio')(accountSid, authToken);

const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN
const JWT_REFRESH_TOKEN = process.env.JWT_REFRESH_TOKEN
const crypto = require('crypto') //For Hashing

const smsKey = process.env.SMS_SECRET_KEY


router.post('/register' , async (req , res)=>{

    //declaring credentials
    const fullName = req.body.name
    const phoneNo = req.body.phoneNo
    const email = req.body.email
    const password = req.body.password
    const confirmPassword = req.body.confirmPassword

    if( password === confirmPassword ){
        try{
        const newUser = new User({
            name: fullName,
            phone_no: phoneNo,
            email_id : email,
            user_password: CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString()//Encryptes Password
        })

        const user = await newUser.save()
        res.status(201).json("user Created")
        
        }catch(err){
            res.status(401).json("User Already Registered")
        }
    }else{
        res.status(401).json("Passwords Don't Match")
    }

})

router.post('/login', async (req, res) => {

    //Decrlaring credentials
    const phoneNo = req.body.phoneNo
    const password = req.body.password
    
    
    try{
            const user = await User.findOne({ phone_no: phoneNo }) //Find User in Database by PhoneNo

      
            var bytes = CryptoJS.AES.decrypt(user.user_password, process.env.SECRET_KEY); //Decrypt the Encrypted Password
            var originalPass = bytes.toString(CryptoJS.enc.Utf8); //Original Password
        
            originalPass !== password && 
            res.status(401).json("Invalid Password")
    }catch(err){
        res.json("Invalid Mobile Number")
    }
    

    const OTP = Math.floor(Math.random() * 1000000)  //6 Digit OTP
    const timeLimit = 2 * 60 * 1000 // 2mins in milliseconds
    const expires = Date.now() + timeLimit

    const data = `${phoneNo}.${OTP}.${expires}` //Hash Data for JWT
    const hash = crypto.createHmac('sha256', smsKey).update(data).digest('hex') //Hashing of Data

    const fullHash = `${hash}.${expires}` //hash with Expiry

    // client.messages.create({   //UnComment For only Checking ( Requires Money BRUHHHHHHHH !!!!!!!!!!!!)
    //     body : `Your OTP for LOGIN is ${OTP}`,
    //     from : +19106684570,
    //     to : `+91${phoneNo}`
    // }).then((msg) => {
    //     console.log(msg)
    // } ).catch( (err)=>{
    //     console.log(err)
    // })

    res.status(200).send({ phoneNo, hash: fullHash, password, OTP })


})

router.post('/verifyOTP', async (req, res) => {

    const phoneNo = req.body.phoneNo
    const password = req.body.password
    const hash = req.body.hash
    const OTP = req.body.OTP
    let [hashValue, expires] = hash.split('.') //Taking the hash and Breaking it into hashValue and Exprixy

    let now = Date.now()

    if (now > parseInt(expires)) {
        return res.status(504).send({ msg: ' TimeOut' })  //IF Expired after 2 min
    }

    const data = `${phoneNo}.${OTP}.${expires}` //Hash for JWT

    const newCalculatedHash = crypto.createHmac('sha256', smsKey).update(data).digest('hex') //Creates Hash Again

    if (newCalculatedHash === hashValue) {  //If Newly created hash and hash provided by user is same
        const accessToken = jwt.sign({ data: phoneNo }, `${JWT_AUTH_TOKEN}`, { expiresIn: '30s' })
        const refreshToken = jwt.sign({ data: phoneNo }, `${JWT_REFRESH_TOKEN}`, { expiresIn: '1y' })
        refreshTokens.push(refreshToken)

            res.status(202)
                .cookie('accessToken', accessToken, { expires: new Date(new Date().getTime() + 30 * 1000), sameSite: 'strict', httpOnly: true })
                .cookie('authSession', true, { expires: new Date(new Date().getTime() + 30 * 1000) })
                .cookie('refreshToken', refreshToken, { expires: new Date(new Date().getTime() + 35576), sameSite: 'strict', httpOnly: true })
                .cookie('refreshTokenID', true, { expires: new Date(new Date().getTime() + 30 * 1000) })
                .send({ msg: "device Confirmed" })
    }
    else{
        res.json("Invalid OTP")
    }


})

router.post('/resetPassword' , async(req,res)=>{

    const phoneNo = req.body.phoneNo

    const OTP = Math.floor(Math.random() * 1000000)  //6 Digit OTP
    const timeLimit = 2 * 60 * 1000 // 2mins in milliseconds
    const expires = Date.now() + timeLimit

    const data = `${phoneNo}.${OTP}.${expires}` //Hash Data for JWT
    const hash = crypto.createHmac('sha256', smsKey).update(data).digest('hex') //Hashing of Data

    const fullHash = `${hash}.${expires}` //hash with Expiry

        // client.messages.create({   //UnComment For only Checking ( Requires Money BRUHHHHHHHH !!!!!!!!!!!!)
    //     body : `Your OTP for Reset Password is ${OTP}`,
    //     from : +19106684570,
    //     to : `+91${phoneNo}`
    // }).then((msg) => {
    //     console.log(msg)
    // } ).catch( (err)=>{
    //     console.log(err)
    // })

    res.status(200).send({ phoneNo, hash: fullHash, password, OTP })

})

router.post()

router.post()


router.get('/logout', (req, res) => {
    res.clearCookie('refreshToken').clearCookie('accessToken').clearCookie('authSession').clearCookie('resfreshTokenID').send({ msg: "Logout " })
})

module.exports = router