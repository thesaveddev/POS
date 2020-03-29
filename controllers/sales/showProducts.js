Products   = require('../../models/product')

module.exports = 
//show products available for sale
(req, res)=>{
    let paginate = async (products)=>{
        const limit = 24
        const page = parseInt(req.query.page);
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        results = {}
        results.current = page;
       if(endIndex < await products.countDocuments().exec()){
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
res.render('sell', {title:'Sell Products', error:'', message:'', productsToShow:results})
    }
paginate(Products)   
}