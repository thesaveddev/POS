const User    = require('../../models/user');
const bcrypt = require ('bcrypt');

module.exports = 
//add a new user
(req, res) => {

    //check if user exists
    User.findOne({email:req.body.email}, (err, user)=> {
        if(err){
            console.log(err);
        }
        else if(user) {
            User.find({}, (err, users) => {
                return res.render('manageUsers', {users: users, title:'Manage Users', error:'Email Already Exist!', message:''});
            });
        }
        else {
            //encrypt user password
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if(err){
            console.log(err);
        } 
        else{
        //save hashed password to user object
            let newUser = new User({
                username: req.body.username,
                fullName: req.body.fullName,
                email: req.body.email,
                role: req.body.role,
                password: hash
               });

        //create the new user
        User.create(newUser, (err, user)=>{
            if(err){
                User.find({}, (err, users) => {
                return res.render('manageUsers', {users: users, title:'Manage Users', error:'Username Already Exist!', message:''});
            });
            }
            else {
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
          }
        })
    }
})
}