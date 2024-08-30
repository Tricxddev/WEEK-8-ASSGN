
const mongoose = require("mongoose");

const employersDB = new mongoose.Schema({
empFirstName:{type:String, required:true, minlenght:3,maxlengh:20},
empSurName:{type:String, required:true, minlenght:3,maxlengh:20},
empDept:{type:String},
empID:{type:String, match:/[a-zA-Z0-9]/,required:true, maxlengh:5},
empJobRole:{type:String, minlenght:3,maxlengh:20},
empAge:{type:Number, maxlenght:3},
empEmail:{type:String,match:/[a-zA-Z0-9]/},
empAddress:{type:String,match:/[a-zA-Z0-9]/},
empPhone:{type:Number, maxlenght:11}
})

const employerHeader = new mongoose.model("Employers",employersDB)

module.exports= employerHeader


