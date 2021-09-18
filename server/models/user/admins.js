const mongoose = require("mongoose")


const Schema = mongoose.Schema

const adminSchema = new Schema({

    fullName:{type:String,required:true},
    password: {type:String,required:true},
    role: {type:String,required: true}
})



const Admin = mongoose.model('admin',adminSchema)
module.exports = Admin
