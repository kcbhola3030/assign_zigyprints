require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.local_url || 'mongodb://localhost:27017/zigy')
const con = mongoose.connection
con.on('open',()=>{
    try {
        console.log("db is connected")
    } catch (error) {
        console.log(error)
    }
})
module.exports = con