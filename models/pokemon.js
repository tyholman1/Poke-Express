const mongoose = require("mongoose")

const pokeSchema =  new mongoose.Schema({
    //requires a name field. can place other values 
    name: { type: String, required: true },
    color: { type:String, required: true},
    img: String
})

//creating model used to use our CRUD functionalty
//models should be caps
const Pokemon = mongoose.model("Pokemon", pokeSchema)

//need to export to use in other files
 module.exports = Pokemon