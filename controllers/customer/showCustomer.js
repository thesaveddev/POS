const Customer    = require('../../models/customers');

module.exports = 
//show all customers
(req, res)=>{
    Customer.find({}, (err, customers)=>{
        if(err){
            console.log(err);
        }
        res.render('manageCustomers', {customers:customers, title:'Manage Customers', error:'', message:''});
    })
};