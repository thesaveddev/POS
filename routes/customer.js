const   showCustomer = require('../controllers/customer/showCustomer'),
        addCustomer  = require('../controllers/customer/addcustomer')

        
const   express     = require('express'),
        app         = express()

        //show customers
        app.get('/admin/manage_customers', showCustomer)

        //add customers
        app.post('/admin/manage_customers/add_customer', addCustomer);


        module.exports = app