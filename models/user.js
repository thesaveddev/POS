const mongoose = require('mongoose');

let userSchema = new mongoose.Schema({
username: {type:String, unique:true, required:true},
fullName: {type:String, unique:false, required:true},
email: {type:String, unique:true, required:true},
role: {type:String, unique:false, required:true},
password: {type:String, unique:false, required:true},
status: {type:String, unique:false, required:false}
})

module.exports = mongoose.model('User', userSchema);