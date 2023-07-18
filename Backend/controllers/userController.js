const asyncHandler = require("express-async-handler")
const User = require("../models/user.model")
const bycrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const registerUser= async (req, res)=>{
    console.log(req.body)
    const {username, email, password} = req.body;
    const hashedPassword = await bycrypt.hash(password, 10);
    try { 
        const user = await User.create({
            name:req.body.name,
            email:req.body.email, 
            password:hashedPassword

        })
        res.json({"status":"ok"})
    }catch(err){
        res.json({status:"Error", error:"Duplicate Email"})

    }
}


const loginUser = async (req, res)=>{
    console.log(req.body)
    const {email, password} = req.body;
    const user = await User.findOne({email: email});

    if(user && (await bycrypt.compare(password, user.password))){
        return res.json({status:"ok", user:true});
    } else {
        return res.json({status:"error", user:false});
    }
}


const currentUser = asyncHandler(async (req, res)=>{
    res.json(req.user)
    res.json({message:`Current User information`})
})



module.exports = {registerUser, loginUser, currentUser}