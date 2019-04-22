const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    
    gender: {
        type: String,
        required: true,
        enum: ["Male", "Female"]
    },
    fname: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    lname: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 50
    },
    address:{
        type:String,
        required:true,
        minlength:5,
        maxlength:100
    },
    city:{
        type:String,
        required:true,
        minlength:4,
        maxlength:10
    },
    mobile: {
        unique: true,
        type: String,
        required: true,
        minlength: 10,
        maxlength: 10
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50
    },
    role: String
    // points: { type: Number }
});

module.exports = mongoose.model('User', userSchema);