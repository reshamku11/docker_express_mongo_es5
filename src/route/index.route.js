'use strict'
const express =  require('express')
const app =  express();
const user =  require('../route/user.route.js')
app.use('/user',user)

module.exports = app