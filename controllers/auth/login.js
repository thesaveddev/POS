const User    = require('../../models/user')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const querystring = require('querystring');

module.exports = (req, res)=>{
   
        User.findOne({username:req.body.username}, (err, user)=>{
         if(!user){
             res.render('index', {title: 'Login', error:'Incorrect Username or Password!'});
            }
            else {
                bcrypt.compare(req.body.password, user.password, (err, result) => {
                    if(!result){
                        res.render('index', {title: 'Login', error:'Incorrect Username or Password!'})
                    }
                    else {
            let token = jwt.sign({
                username:user.username,
                id:user._id
            }, 'dontguessit', {
                expiresIn: '1d'
                });
                const authConfig = {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                }
                res.cookie('token',  token);
                res.redirect("/dashboard");
                }
            })
        } 
    })
}