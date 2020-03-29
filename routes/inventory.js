const express   =   require('express'),
      router    =   express.Router(),
      User      =   require('../models/user')

      router.get('/admin/inventory', (req, res)=>{
          res.render('inventory', {title: "Inventory"});
      });

      module.exports = router;