const showProducts = require('../controllers/sales/showProducts'),
      sellProducts = require('../controllers/sales/sellProducts')


const express   = require('express'),
      app       = express()
      
    //show available items for sale
    app.get('/sales', showProducts),

    //pay for cart items
    app.post('/sales/sellItems', sellProducts)
    
      module.exports = app;