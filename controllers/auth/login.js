User    = require('../../models/user')

module.exports = (req, res)=>{
    let username = req.body.username,
        password = req.body.password;

    let validateLogin = (username, password)=>{
        User.findOne({username:username}, (err, user)=>{
         if(err){
             console.log(err);
            }
         if(user){
                res.redirect('/dashboard');
             }else{
             res.render('index', {title: 'Login', error:'Incorrect Password'})
             } if(user === null){
             res.render('index', {title: 'Login', error:'User Not Registered!'})
         }
    })
}
validateLogin(username, password);
}