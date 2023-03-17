const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")


require('dotenv').config()
const mySite = express()
const portNumber = process.env.portNumber || 3333


mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_URL)
const connection = mongoose.connection

connection.once('open',()=>{
    console.log("DB Connection established and opened")
})

mySite.listen(()=>{
    console.log("Listening to my portfolio site")
})
