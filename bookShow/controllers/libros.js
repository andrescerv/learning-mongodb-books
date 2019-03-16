//3.1 IMPORTS 
const libroModel = require('../models/libros') // importando el modelos

//3.2 FUNCTIONS 
function findAll (req, res, next) { // esta función te regresa toda la db
    libroModel.find( {}, (err, bookShowDB) => {
        if ( err ){
            next(err)
        } 
            res.json({bookShowDB})
    })
}

function addBook (req, res, next) { // esta función agrega un nuevo libro a la DB
    const libro = new libroModel(req.body)
    libro.save( (err, resAddBook) => {
        if ( err ) {
            res.json({status: 'error'})
            next()
        }
        res.json({status: 'libro agregado!', libro}) // mi gran error fue que en Postman, no estaba enviando mi body en formato JSON sino en formato de texto. Me tomó 2-3 horas descubrirlo.
    }) 
}

function findBook (req, res, next) { // esta función te regresa un libro en específico
    libroModel.find( {"_id": req.params.id}, (err, resFindBook) => {
        if (err) {
            res.json({status: 'error'})
            next()
        }
        res.send({resFindBook})
    })
} // me tomó 4 horas en aprender que el router no acepta Numbers ni Strings con espacios

function editBook (req, res, next) {
    const newVals = req.body
    libroModel.update( {"_id": req.params.id}, {idLibro: newVals.idLibro, titulo: newVals.titulo, paginas: newVals.paginas, descripcion: newVals.descripcion}, (err, raw) => {
        if (err) {
            res.json({status: 'error'})
            next()
        }
        res.json({status: 'Success! Book updated!', newVals})
    })
}

// function deleteBook (req, res, next) {

// } 

//3.3 EXPORT
module.exports = { findAll, addBook, findBook, editBook}