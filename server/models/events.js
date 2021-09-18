const { date } = require("joi")
const mongoose = require("mongoose")


const Schema = mongoose.Schema

const EventSchema = new Schema({

    text:{type:String,required:true},
    startDate:{type:Date,required:true},
    endDate:{type:Date,required:true}

})


const Event= mongoose.model('event',EventSchema)
module.exports = Event