const User    = require('../../models/user')

module.exports = 
//add a new user
(req, res)=>{
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
           User.find({}, (err, users)=>{
               if(err){
                   console.log(err);
               } else {
            res.render('manageUsers', {users: users, title:'Manage Users', error:'Username or Email Already Exist!', message:''});
               }
           })
       } else{
        user.save();
    User.find({}, (err, users)=>{
        if(err){
            console.log(err);
        }else{
            res.render('manageUsers', {users:users, title:'Manage Users', error:'', message:'User ' + req.body.username + ' has been created!'});
            }
        })
       }
   })
    };
addUser(newUser);
}