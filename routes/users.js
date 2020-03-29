const showUsers = require('../controllers/users/showUsers'),
      addUser   = require('../controllers/users/addUser')

const   express = require('express'),
        app  = express()


app.get('/admin/manage_users', showUsers);

app.post("/admin/manage_users/add_user", addUser);

module.exports = app;