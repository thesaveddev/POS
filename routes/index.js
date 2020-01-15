const express   = require('express'),
      router    = express.Router()

    router.get('/', (req, res)=>{
      res.render('index', {title:'POS: Login', error:''})
      })
    module.exports = router;
