const express = require("express")
const app = express()
const cors = require("cors")
const dotenv = require("dotenv").config();
const {registerUser, loginUser, currentUser} = require("./controllers/userController")
const mongoose = require("mongoose")
const User = require("./models/user.model")
const connectDb = require("./config/dbConnection");
connectDb();  

app.use(cors()) //for bypassing browser security in development(different backend and frontend) and not in production
app.use(express.json()) //This is the middle ware similarly we have created in node js tutorial remove this and you wouldn't able to see the req.body in below register post method

app.use("/api/users", require("./Routes/userRoutes"))
app.get("/hello", (req, res)=>{
    res.send("Hello World")
})


app.listen(5002, ()=>{
    console.log("Server Started on 5002")
})