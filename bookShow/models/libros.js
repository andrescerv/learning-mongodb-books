//2.1 IMPORT MONGOOSE
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//2.2 Schema
const librosSchema = new Schema({
    idLibro: {
        type: Number,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    paginas: {
        type: Number,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    }
})

//2.3 conversión a "model" y 2.4 exportación
module.exports = mongoose.model( 'libro', librosSchema)