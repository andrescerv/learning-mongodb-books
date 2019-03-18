//2.1 IMPORT MONGOOSE
const mongoose = require('mongoose')
const Schema = mongoose.Schema

//2.2 SCHEMA
const booksSchema = new Schema({
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

//2.3 CONVERSION A "MODEL" Y 2.4 EXOPORATCIÓN
module.exports = mongoose.model( 'libros', booksSchema)