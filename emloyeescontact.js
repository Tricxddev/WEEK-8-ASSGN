const mongoose = require("mongoose")

const empContacts = mongoose.Schema({
    empAddress:{type:String,match:/a-aZ-0Z-9/},
    empEmail:{type:String, match:/a-aZ-0Z-9/},
    empPhone:{type:Number, maxlenght:11},
    
})

const   emp_Contacts = new mongoose.model("allEmployeeCont",empContacts)

module.exports=emp_Contacts

