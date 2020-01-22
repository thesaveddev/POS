const express   = require('express'),
      router    = express.Router(),
      Product   = require('../models/product')

    router.get('/sales', (req, res)=>{
        Product.find({}, (err, products)=>{
            if(err){
                console.log(err);
            }
            
            const limit = 24;
            const page = 1;
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
            const productsToShow = products.splice(startIndex, endIndex);
            res.render('sell', {title:'POS: Sales', products:productsToShow})
        })
    })

      module.exports = router;