const express     = require('express'),
      app         = express(),
      bodyParser  = require('body-parser'),
      mongoose    = require('mongoose'),
      port        = process.env.PORT || 3000


app.set('view engine', 'ejs')
app.set('views', './views')

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('usenewUrlParser', true);
mongoose.connect('mongodb://localhost/p_o_s', {useUnifiedTopology:true, useNewUrlParser:true}, console.log('DB Connected'));

//declare routes
const indexRoute     = require('./routes/index'),
      adminRoute     = require('./routes/admin'),
      authRoute      = require('./routes/auth'),
      usersRoute     = require('./routes/users'),
      productsRoute  = require('./routes/products'),
      salesRoute     = require('./routes/sales'),
      inventoryRoute = require('./routes/inventory'),
      customerRoute  = require('./routes/customer'),
      supplierRoute  = require('./routes/supplier')

//use routes
app.use(indexRoute);
app.use(adminRoute);
app.use(authRoute);
app.use(usersRoute);
app.use(productsRoute);
app.use(salesRoute);
app.use(inventoryRoute);
app.use(customerRoute);
app.use(supplierRoute);

app.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = app;