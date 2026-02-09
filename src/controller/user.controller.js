'use strict'
const user = require('../model/user.model.js')
const { token } = require('../middleware/middleware.js')
exports.getAllUser = (async (req, res) => {
    try {
        let result = await user.find()
        res.status(200).json({ data: result })
    } catch (error) {
        console.log(error)
        res.send('something went wrong in finding all data')
    }
})
exports.register = (async (req, res) => {
    try {
        let result = await user.create(req.body)
        res.status(200).json({ message: 'Data is created successfuly', data: result })
    } catch (error) {
        console.log(error)
        res.send('something went wrong in finding all data')
    }
})
exports.login = (async (req, res) => {
    try {
        let { email, password } = req.body
        let result = await user.findOne({ email: email, password: password })
        if(!result){
            res.status(200).json({ message: 'data does not exits', token: result })
            return
        }
        let tokens =  await token({name:result.name,id:result.id})
        console.log(tokens,"==================")
        res.status(200).json({ message: 'Login successfully', token: tokens })
    } catch (error) {
        console.log(error)
        res.send('login failed')
    }
})
exports.userDeatils = (async (req, res) => {
    try {
        let id = req.id
        let result = await user.findOne({ id : id})
        res.status(200).json({ message: 'Login successfully', token: result })
    } catch (error) {
        console.log(error)
        res.send('login failed')
    }
})