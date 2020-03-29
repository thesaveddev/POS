const mongoose = require('mongoose');

let customersSchema = new mongoose.Schema({
firstName: {type:String, unique:true, required:true},
lastName: {type:String, unique:false, required:true},
phone: {type:String, unique:true, required:false},
email: {type:String, unique:true, required:true},
address: {type:String, unique:false, required:false}
})

module.exports = mongoose.model('Customers', customersSchema);