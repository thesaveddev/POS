const Customer = require('../../models/customers')

module.exports = 

//add a new customer
(req, res)=>{
    //define new customer
    let newCustomer = new Customer ({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address
    });
    
    let addCustomer = (newCustomer)=>{
        Customer.create(newCustomer, (err, customer)=>{
            if(err){
                Customer.find({}, (err, customers)=>{
                    if(err){
                        console.log(err);
                    } else {
                        res.render('manageCustomers', {customers: customers, title: 'Manage Customers', error:'Customer Already Exists', message: ''});
                    }
                })
            } else {
                customer.save();
            Customer.find({}, (err, customers)=>{
                if(err){
                    console.log(err);
                }
                res.render('manageCustomers', {title: 'Manage Customers', customers: customers, error: '', message: 'Customer ' + req.body.firstName + ' ' + req.body.lastName + ' Added'});
            });
            }
        });
    }
    addCustomer(newCustomer);
}