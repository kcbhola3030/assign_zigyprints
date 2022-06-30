const { findOne } = require('domutils');
const express = require('express')
const app = express();
const db = require('./db')
const {user} = require('./models/user.js')
app.use(express.json());

//Add User
app.post('/addUser',async(req,res)=>{
    try {
        const checkUser = await user.findOne({email:req.body.email})
        if(checkUser)
        {
            return(res.send(`This emailId has already been used ${checkUser.email}`))
        }
        const newUser = new user(req.body);
        console.log(newUser)
        console.log(req.body)
        res.status(200).send(`user has been successfully added with name ${newUser.fname} and emailId ${newUser.email}`);
        await newUser.save();
    } catch (error) {
       console.log(error);
       
    }
})

//Delete User
app.delete('/deleteUser',async(req,res)=>{
    try {
        const delUser = req.body.email
        if(await user.findOneAndRemove({email:delUser}))
        return res.status(200).send(`user with emailID ${delUser} has been deleted`)
        else{
            return res.status(403).send(`No user or Invalid user with emailId ${delUser}`)
        }
    } catch (error) {
        console.log(error)
    }
})


app.listen(8000,()=>{
    try {
        console.log("listening on 3000")
    } catch (error) {
        console.log(error)
    }
})