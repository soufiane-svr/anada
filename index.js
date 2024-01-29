const express = require('express')
const app = express()
const mongoose  = require('mongoose')
mongoose.connect('mongodb+srv://soufiane:Sousou12@cluster0.5ij9nvy.mongodb.net/mernproject?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected')
}).catch((error)=>{
    console.log('error')
})


// import users model

const UserModel = require('./models/Users')

app.get('/Users' , async(req,res)=>{
   const User = await UserModel.find()
   res.json(User)
})


app.listen(3001,()=>{
    console.log('create new server')
})