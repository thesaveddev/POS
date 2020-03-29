const Suppliers = require('../../models/suppliers')

module.exports = (req, res)=>
//add a new supplier
{
    let newSupplier = new Suppliers ({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        products: req.body.products,
    });

    let addSupplier = (newSupplier)=>{
        Suppliers.create(newSupplier, (err, supplier)=>{
            if(err){
                console.log(err);
                Suppliers.find({}, (err, suppliers)=>{
                    if(err){
                        console.log(err);
                    } else {
                        res.render('manageSuppliers', {suppliers: suppliers, title: 'Manage Suppliers', error:'Supplier Already Exists', message: ''});
                    }
                })
            } else {
                supplier.save();
            Suppliers.find({}, (err, suppliers)=>{
                if(err){
                    console.log(err);
                }
                res.render('manageSuppliers', {title: 'Manage Suppliers', suppliers: suppliers, error: '', message: 'Supplier ' + req.body.name + ' Added'});
            });
            }
        });
    }
    addSupplier(newSupplier);
}