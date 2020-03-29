module.exports = 
//show the home page
(req, res)=>
{
  res.render('index', {title:'Login', error:''})
}