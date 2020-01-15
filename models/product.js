const   mongoose    = require('mongoose');

let productSchema = new mongoose.Schema({
    productName: {type:String, unique:true, required:true},
    costPrice: {type:Number, unique:false, required:false},
    sellingPrice: {type:Number, unique:false, required:true},
    productQuantity: {type:Number, unique:false, required:true},
    measuringUnit: {type:String, unique:false, required:true},
    measuringUnitQuantity: {type:String, unique:false, required:true},
    productBarcode: {type:String, unique:true, required:true},
    invoiceNumber: {type:String, unique:false, required:false}
    })

module.exports = mongoose.model('Product', productSchema)