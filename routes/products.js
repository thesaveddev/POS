const   express  = require('express'),
        router   = express.Router(),
        mongoose = require('mongoose'),
        paginate = require('paginate')({mongoose: mongoose});
        Products = require('../models/product')

    router.get('/admin/manage_products', (req, res)=>{
        

        Products.find({}, (err, products)=>{
            if(err){
                console.log(err);
            }
            let totalItems = products.length,
            itemsPerPage = 5,
            pageNum = totalItems / itemsPerPage;
            // calculate the data for above variables and pass them in below method
       
            let pagination = paginate.page(totalItems, itemsPerPage, pageNum),
           paginationHtml = pagination.render({ baseUrl: '/' }); //the link to pass to href, page number will be added as query paramtere to it e.g. /?page=6
        res.render('manageProducts', {title:'POS: Manage Products', error:'', message:'', products:products, paginationHtml:paginationHtml})
        })
    })

    router.post('/admin/manage_products/add_product', (req, res)=>{
        let product = {
        productBarcode: req.body.productBarcode,
        productName: req.body.productName,
        costPrice: req.body.costPrice,
        sellingPrice: req.body.sellingPrice,
        productQuantity: req.body.productQuantity,
        measuringUnit: req.body.measuringUnit,
        measuringUnitQuantity: req.body.measuringUnitQuantity,
        invoiceNumber: req.body.invoiceNumber
        };

        let addProduct = (product)=>{

        

            Products.create(product, (err, product)=>{
                if(err){
                Products.find({}, (err, products)=>{
                    if(err){
                        console.log(err);
                    };
            let totalItems = products.length,
            itemsPerPage = 5,
            pageNum = totalItems / itemsPerPage;
            // calculate the data for above variables and pass them in below method
        
            let pagination = paginate.page(totalItems, itemsPerPage, pageNum),
            paginationHtml = pagination.render({ baseUrl: '/' }); //the link to pass to href, page number will be added as query paramtere to it e.g. /?page=6

                res.render('manageProducts', {title:'POS: Manage Products', error:'Product Not Added Or Already Exists!', message:'', products:products, paginationHtml:paginationHtml});
                });
            }
            Products.find({}, (err, products)=>{
                if(err){
                    console.log(err);
                };

                let totalItems = products.length,
                itemsPerPage = 5,
                pageNum = totalItems / itemsPerPage;
                // calculate the data for above variables and pass them in below method
           
                let pagination = paginate.page(totalItems, itemsPerPage, pageNum),
               paginationHtml = pagination.render({ baseUrl: '/' }); //the link to pass to href, page number will be added as query paramtere to it e.g. /?page=6
               
            res.render('manageproducts', {title:'POS: Manage Products', error:'', message:'Product Added!', products:products, paginationHtml:paginationHtml});
                })
            })
        }

    addProduct(product);

    })


        module.exports = router;
