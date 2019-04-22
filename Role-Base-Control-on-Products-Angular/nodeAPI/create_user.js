
const app = require('express')();
const _ = require('lodash');
const jwt = require('jsonwebtoken');
const User = require('./userSchema');

app.post('/', async (req, res, next) => {
    try {
        
        const user = new User(_.pick(req.body, ['gender','fname','lname', 'address', 'city','mobile','password', 'role']));
        await user.save();
        console.log("Welcome ");
        res.send(_.pick(user, ['gender','fname','lname', 'address', 'city','mobile','password']));
    }
    catch (ex) {
        console.log({ex})
    }
});

app.post('/login',(req,res)=>{
    User.findOne({
        mobile:req.body.mobile
    },(err,User)=>{
        if(err) 
            return res.send("Error on the Server");
        if(!User)
            return res.send("User Not Found");

        var passwordIsValid = (req.body.password,User.password);

        if(!passwordIsValid)
            return res.send("Password Not Valid");
            
        console.log(" login Successfully");

        const token = jwt.sign({ _id: User._id, role: User.role }, "secretkey",{expiresIn : '24h'});

         let resData = _.pick(User, ['fname','lname', 'address', 'city']);
         resData['access_token'] = token;
        res.header('access_token', token).send(resData);
    });
});

app.get('/:id',(req,res)=>{
    User.findById(req.params.id,(err,data)=>{
        if(err) 
            return res.send(err)
        res.send(data);
    });
});

module.exports = app;