const express = require('express')
const app = express()
app.use(express.json());

const mongoose  = require('mongoose')
mongoose.connect('mongodb+srv://soufiane:Sousou12@cluster0.5ij9nvy.mongodb.net/mernproject?retryWrites=true&w=majority')
.then(()=>{
    console.log('connected db')
}).catch((error) => {
    console.log('Error connecting to tkkmsshe database:', error);
 });


// import users model

const UserModel = require('./models/Users')

app.get('/Users' , async(req,res)=>{
   const User = await UserModel.find()
   res.json(User)
})
app.get('/',(req,res)=>{
    res.send('helloo م')
})

app.listen(3001,()=>{
    console.log('create new server')
})