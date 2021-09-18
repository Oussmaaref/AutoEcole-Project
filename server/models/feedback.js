const { date } = require("joi")
const mongoose = require("mongoose")


const Schema = mongoose.Schema

const feedbackSchema = new Schema({

    fullName:{type:String,required:true},
    text:{type:String,required:true},
    rate:{type:Number,required:true}

})


const Feedback= mongoose.model('feedback',feedbackSchema)
module.exports = Feedback