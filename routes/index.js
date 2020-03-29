const index = require('../controllers/index/index')

const express   = require('express'),
      app    = express()

    //show the home page
    app.get('/', index)
      
    module.exports = app;