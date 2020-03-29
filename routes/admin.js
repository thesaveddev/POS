const admin = require('../controllers/admin/admin')

const   express = require('express'),
        app     = express()



app.get('/dashboard', admin)


module.exports = app