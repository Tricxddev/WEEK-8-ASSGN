//const { default: mongoose } = require("mongoose")
const mongoose = require("mongoose")


const dbConnect = async ()=>{
    mongoose.connect(`${process.env.db_URL}`)
    .then(()=> console.log("THIS BACKEND NOW CONNECTED TO DATABASE"))
}

module.exports = dbConnect ;