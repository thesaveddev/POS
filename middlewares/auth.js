const User = require('../models/user');
const jwt = require('jsonwebtoken');

exports.signIn = 
    (req, res, next) => {
       //get user authorization request
       let cookie = req.headers.cookie;
       //extract the token from the authorization header
        let splited_cookie = cookie.split('token=')

       let token = splited_cookie[1]
       //verify token
        jwt.verify(token, 'dontguessit', (err, user) => {
            if(err){
                res.send('Access Denied!');
            } 
            //grant user access
            req.user = user;
            next();
            }
        );
    }
    