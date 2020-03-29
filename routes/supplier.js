const addSuppliers = require('../controllers/supplier/addSupplier')
const showSuppliers = require('../controllers/supplier/showSupplier')

const   express   = require('express'),
        app       = express()

        app.get('/suppliers', showSuppliers)

        app.post('/admin/manage_suppliers/add_supplier', addSuppliers);


        module.exports = app