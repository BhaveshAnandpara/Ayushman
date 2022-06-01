const router = require("express").Router()
const User = require("../Models/User")
const dotenv = require("dotenv")
dotenv.config()
const jwt = require('jsonwebtoken')
let refreshTokens = []
const cookiePasrser = require('cookie-parser')


const accountSid = process.env.ACCOUNT_SID
const authToken = process.env.AUTH_TOKEN
const client = require('twilio')(accountSid, authToken);

const JWT_AUTH_TOKEN = process.env.JWT_AUTH_TOKEN
const JWT_REFRESH_TOKEN = process.env.JWT_REFRESH_TOKEN
const crypto = require('crypto')

const smsKey = process.env.SMS_SECRET_KEY



router.post("/login", async (req, res) => {
    res.status(200).json("I am in Login")
})

router.post('/sendOTP', (req, res) => {
    const phoneNo = req.body.phoneNo
    const OTP = Math.floor(Math.random() * 1000000)
    const timeLimit = 2 * 60 * 1000 // 2mins in milliseconds
    const expires = Date.now() + timeLimit

    const data = `${phoneNo}.${OTP}.${expires}` //Hash for JWT
    const hash = crypto.createHmac('sha256', smsKey).update(data).digest('hex')

    const fullHash = `${hash}.${expires}`

    client.messages.create({
        body : `Your OTP for LOGIN is ${OTP}`,
        from : +19106684570,
        to : `+91${phoneNo}`
    }).then((msg) => {
        console.log(msg)
    } ).catch( (err)=>{
        console.log(err)
    })

    res.status(200).send({ phoneNo, hash: fullHash })

})

router.post('/verifyOTP', (req, res) => {
    const phoneNo = req.body.phoneNo
    const hash = req.body.hash
    const OTP = req.body.OTP
    let [hashValue, expires] = hash.split('.')

    let now = Date.now()

    if (now > parseInt(expires)) {
        return res.status(504).send({ msg: ' TimeOut' })
    }

    const data = `${phoneNo}.${OTP}.${expires}` //Hash for JWT
    const newCalculatedHash = crypto.createHmac('sha256', smsKey).update(data).digest('hex')

    if (newCalculatedHash === hashValue) {
        const accessToken = jwt.sign({ data: phoneNo }, `${JWT_AUTH_TOKEN}`, { expiresIn: '30s' })
        const refreshToken = jwt.sign({ data: phoneNo }, `${JWT_REFRESH_TOKEN}`, { expiresIn: '1y' })
        refreshTokens.push(refreshToken)

        res.status(202)
            .cookie('accessToken', accessToken, { expires: new Date(new Date().getTime() + 30 * 1000), sameSite: 'strict', httpOnly: true })
            .cookie('authSession', true, { expires: new Date(new Date().getTime() + 30 * 1000) })
            .cookie('refreshToken', refreshToken, { expires: new Date(new Date().getTime() + 35576), sameSite: 'strict', httpOnly: true })
            .cookie('refreshTokenID', true, { expires: new Date(new Date().getTime() + 30 * 1000) })
            .send({ msg: "device Confirmed" })

    } else {
        return res.status(400).send({ verification: false, msg: "Verification Failed" })
    }


})

async function authenticateUser(req, res, next) {

    const accessToken = req.cookies.accessToken

    jwt.verify(accessToken, JWT_AUTH_TOKEN, async (err, phone) => {
        if (phone) {
            req.phoneNo = phone
            next()
        } else if (err.message === 'TokenExpiredError') {
            return res.status(403).send({ sucess: false, msg: "Acess Token Expired" })
        } else {
            console.error(err)
            res.status(403).send({ err, msg: "User not Authenticated" })
        }
    })
}

router.post('/refresh', (req, res) => {
    const refreshToken = req.cookies.refres
    if (!refreshToken) return res.status(403).send({ msg: 'Refresh Token Not found , Please Login Again' })
    if (!refreshTokens.includes(refreshToken)) return res.status(403).send({ msg: "refresh Token Blocked , Login Again" })

    jwt.verify(refreshToken, JWT_REFRESH_TOKEN, (err, phoneNo) => {
        if (!err) {
            const accessToken = jwt.sign({ data: phoneNo }, `${JWT_AUTH_TOKEN}`, { expiresIn: '30s' })
            res.status(202)
                .cookie('accessToken', accessToken, { expires: new Date(new Date().getTime() + 30 * 1000), sameSite: 'strict', httpOnly: true })
                .cookie('authSession', true, { expires: new Date(new Date().getTime() + 30 * 1000) })
                .send({previousSessionExpiry : true , sucess : true})

        }else{
            return res.status(403).send({sucess:false , msg:"REfresh Token Invalid"})
        }

    })
})

router.get('/logout' , (req,res)=>{
    res.clearCookie('refreshToken').clearCookie('accessToken').clearCookie('authSession').clearCookie('resfreshTokenID').send({msg : "Logout "})
})

module.exports = router