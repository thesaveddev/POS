const Products = require('../../models/product');

module.exports = 
//add a new product
(req, res)=>{

    let product = {
    productBarcode: req.body.productBarcode,
    productName: req.body.productName,
    costPrice: req.body.costPrice,
    sellingPrice: req.body.sellingPrice,
    productQuantity: req.body.productQuantity,
    measuringUnit: req.body.measuringUnit,
    measuringUnitQuantity: req.body.measuringUnitQuantity,
    invoiceNumber: req.body.invoiceNumber,
    };

    var message; 
    var error;

        let paginate = async (products)=>{
            let limit = 5
            let page = parseInt(req.query.page) || 1;
            let startIndex = (page - 1) * limit;
            let endIndex = page * limit;

            results = {}

            results.current = page || 1;

            let allProducts = await products.countDocuments().exec();

        if(endIndex < allProducts){
            results.next = page + 1
                };

            if(startIndex > 0){
            results.previous =  page - 1
            }

            try{
            results.result = await products.find().limit(limit).skip(startIndex).exec()
            } catch(e){
                console.log(e)
            }
    res.render('manageProducts', {title:'Manage Products', error:error, message:message, productsToShow:results})
        }

    let addProduct = (product)=>{
        Products.create(product, (err, product)=>{
            if(err){
                error = 'Product Already Exists';
                message = '';
                paginate(Products)
        }
        error = ''
        message = 'Product Added!'
        paginate(Products);
            })
    }
addProduct(product);
}