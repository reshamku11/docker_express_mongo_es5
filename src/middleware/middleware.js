'use strict'
require('dotenv').config()
let secKey = process.env.AuthprivateKay || "keySecrate"
const jwt = require('jsonwebtoken')
exports.token = async (req) => {
    let result = jwt.sign(req, secKey, { expiresIn: "10m" })
    return result
}

exports.middleware = async (req, res, next) => {
    try {
        let authToken = req?.headers?.authorization 
        let splitValue = authToken.split(" ") 
        let token =  splitValue[1]
        let verifyToken = jwt.verify(token,secKey)
        console.log(verifyToken,"hello")
        if(verifyToken){
            res.id = verifyToken.id
            res.name = verifyToken.name
            next()
        }
        
    } catch (error) {
        res.send('invalid token')
        return 
    }
}