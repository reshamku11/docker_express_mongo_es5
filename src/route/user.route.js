'use strict'
const express = require('express')
const app = express.Router();
const controller = require('../controller/user.controller.js')
const { middleware } = require('../middleware/middleware.js')
app.get('/getAll', controller.getAllUser)
app.post('/register', controller.register)
app.post('/login', controller.login)
app.post('/verifyToken', middleware, controller.userDeatils)
module.exports = app