const { date } = require("joi")
const mongoose = require("mongoose")


const Schema = mongoose.Schema

const vehiculeSchema = new Schema({

    marque:{type:String,required:true},
    matricule:{type:String,required:true},
    visite_technique:{type:Date,required:true},
    visite_vignette:{type:Date,required:true},
    visite_assurence:{type:Date,required:true},
    visite_reparation:{type:Date,required:true},
})


const Vehicule= mongoose.model('vehicule',vehiculeSchema)
module.exports = Vehicule