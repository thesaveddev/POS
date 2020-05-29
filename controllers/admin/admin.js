
module.exports = 
(req, res) => {
    res.render('dashboard', {title: 'Dashboard', user: req.user})
}