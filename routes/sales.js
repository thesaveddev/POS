const express   = require('express'),
      router    = express.Router()

    router.get('/sales', (req, res)=>{
        res.render('sell', {title:'POS: Sales'})
    })



      module.exports = router;