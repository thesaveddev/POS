const   express = require('express'),
        router  = express.Router(),
        User    = require('../models/user')

    //Sign In
        router.post('/signin', (req, res)=>{
            let username = req.body.username,
                password = req.body.password;

            let validateLogin = (username, password)=>{
                User.findOne({username:username}, (err, user)=>{
                 if(err){
                     console.log(err);
                    }
                 if(user){
                     if(user.password === password && user.role === 'Admin' || user.password === password && user.role === 'Manager' || user.password === password && user.role === 'Supervisor'){
                         user.status = 'Logged In';
                         user.save();
                    res.redirect('/admin')
                     } else if(user.password === password && user.role === 'Sales Rep'){
                         user.status = 'Signed In';
                         user.save();
                        res.redirect('/sales');
                     }else{
                     res.render('index', {title: 'POS: Login', error:'Incorrect Password'})
                     }
                 } if(user === null){
                     res.render('index', {title: 'POS: Login', error:'User Not Registered!'})
                 }
            })
        }
        validateLogin(username, password);
        });

    // Sign Out
        router.get('/signout', (req, res)=>{
            res.redirect('/');
        })

//Middlewares
let isLoggedIn = (req, res, next)=>{
    if(req.user.status === 'Logged In'){
        return next();
    }
    res.redirect('/');
};

        module.exports = router;