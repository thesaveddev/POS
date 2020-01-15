const   express = require('express'),
        router  = express.Router(),
        User    = require('../models/user')

    router.post("/admin/manage_users/add_user", (req, res)=>{
        let newUser = new User({
            username: req.body.username,
            fullName: req.body.fullName,
            email: req.body.email,
            role: req.body.role,
            password:req.body.password
           });
    let addUser = (newUser)=>{
       User.create(newUser, (err, user)=>{
           if(err){
       res.render('manageUsers', {title:'POS: Manage Users', error:'Username or Password Already Exist!', message:''});
           } else{
            user.save();
        User.find({}, (err, users)=>{
            if(err){
                console.log(err);
            }else{
                res.render('manageUsers', {users:users, title:'POS: Manage Users', error:'', message:'User ' + req.body.username + ' has been created!'});
                }
            })
           }
       })
        };
addUser(newUser);
    });

module.exports = router;