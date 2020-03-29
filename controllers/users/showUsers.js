const User    = require('../../models/user')

module.exports = 
//show all users
(req, res)=>{
    User.find({}, (err, users)=>{
        if(err){
            console.log(err);
        }
        res.render('manageUsers', {users:users, title:'Manage Users', error:'', message:''});
    })
}