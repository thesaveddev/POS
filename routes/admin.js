const   express = require('express'),
        router  = express.Router(),
        User    = require('../models/user')

router.get('/admin', (req, res)=>{
    res.render('adminDashboard', {title: 'POS: Admin'})
})

router.get('/admin/manage_users', (req, res)=>{
    User.find({}, (err, users)=>{
        if(err){
            console.log(err);
        }
        res.render('manageUsers', {users:users, title:'POS: Manage Users', error:'', message:''});
    })
})
module.exports = router