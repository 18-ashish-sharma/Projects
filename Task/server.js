const express = require('express')
const mongoose  = require('mongoose')
const dotenv  = require('dotenv').config()
require('./config/db')

const port = process.env.PORT
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended: true}))

const userRoute = require('./routes/userRoute')
const stateRoute = require('./routes/stateRoute')
const districtRoute = require('./routes/districtRoute')
const childRoute = require('./routes/childRoute')

app.use('/child', childRoute)
app.use('/user', userRoute)
app.use('/state', stateRoute)
app.use('/district', districtRoute)

app.get('/',(req,res)=>{
    res.send('welcome home')
})


app.listen(port , ()=>{
    console.log(`server is running at  port ${port}`)
})