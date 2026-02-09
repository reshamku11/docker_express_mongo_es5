'use strict'
const express = require('express')
const app = express()
const cors  =  require('cors')
const bodyParser =  require('body-parser')
const route =  require('./src/route/index.route.js')
let connectDB = require('./src/config/db.connection.js')
app.use(cors())
app.use(bodyParser.json())
connectDB()
app.get('/test',(req,res)=>{
    res.send('healthy server')
})
app.use('/api',route)
app.use((req,res)=>{
    res.send('URL not found')
})

module.exports =  app