const admin = require('../controllers/admin/admin');
const auth = require('../middlewares/auth');

const   express = require('express'),
        app     = express()



app.get('/dashboard', auth.signIn, admin)


module.exports = app