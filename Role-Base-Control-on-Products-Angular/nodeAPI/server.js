const express = require('express')
const app = express();
const mongoose = require('mongoose');

const user = require('./create_user');
const item_create = require('./item_create');
const item_list = require('./item_list');

mongoose.connect('mongodb://localhost/Fashion',{useNewUrlParser: true, useCreateIndex: true} )
    .then(()=>console.log("Database Created"))
    .catch(err=>console.error(err));

app.use(express.json());

app.use('/user',user); 
// app.use('/seller',item_create); 
// app.use('/buyer',item_list);  


const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log("Server Running on "+port+" port number");
});