const   addProduct  = require('../controllers/products/addProduct'),
        showproduct = require('../controllers/products/showProduct')


const   express  = require('express'),
        app      = express(),
        mongoose = require('mongoose')

    //show products
    app.get('/admin/manage_products', showproduct);

    //add new product
    app.post('/admin/manage_products/add_product', addProduct);

    module.exports = app;
