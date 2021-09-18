const mongoose = require("mongoose")


const Schema = mongoose.Schema

const candidateSchema = new Schema({

    fullName:{type:String,required:true},
    password: {type:String,required:true},
    role: {type:String,required: true},
    age:{type:String,required:true},
    mobile: {type:String, required:true,length:8},
    type:{type:String,required: true},
    categorie:{type:String,required: true},
    city:{type:String,required: true},
    payee:{type:String,required: true},
    dateexamen:{type:Date,required: true},
    apayee:{type:String,required: true}
})



const Candidate = mongoose.model('candidate',candidateSchema)
module.exports = Candidate
