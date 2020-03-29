const mongoose = require('mongoose');

let suppliersSchema = new mongoose.Schema({
name: {type:String, unique:true, required:true},
phone: {type:String, unique:true, required:false},
email: {type:String, unique:true, required:true},
address: {type:String, unique:false, required:false},
products: {type:String, unique:false, required:true},

})

module.exports = mongoose.model('Suppliers', suppliersSchema);