const mongoose = require ('mongoose');
const userSchema = new mongoose.Schema({
    fname:{
        type:String,
        required:true,
        
    },
    lname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true,
        
    }
})
const user = mongoose.model('user',userSchema);
module.exports = {user} 