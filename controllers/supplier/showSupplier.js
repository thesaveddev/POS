const Suppliers = require('../../models/suppliers')

module.exports = 
//show all suppliers
(req, res)=>
{
    Suppliers.find({}, (err, suppliers)=>{
        if(err){
            console.log(err);
        }
        res.render('manageSuppliers', {suppliers: suppliers, title:'Manage Suppliers', error:'', message:''});
    })
}