const login = require('../controllers/auth/login'),
      logout = require('../controllers/auth/logout')

const   express = require('express'),
        app = express()
        

    //Sign In
        app.post('/signin', login);

    // Sign Out
        app.get('/signout', logout);

    module.exports = app;