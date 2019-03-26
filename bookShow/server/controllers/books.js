//3.1 IMPORTINF MODEL
const booksModel = require('../models/books')

{ //3.2 FUNCTIONS
    function findAllBooks (req, res, next) { // esta función te regresa toda la DB BOOKS
        booksModel.find( {}, (err, dbBooks) => {
            if ( err ){
                next(err)
            }
            res.json({dbBooks})
        })
    }
    
    function addBook (req, res, next) { // esta función agrega un nuevo libro a la DB
        const book = new booksModel(req.body)
        book.save( (err, resAddBook) => {
            if ( err ) {
                res.json({status: 'error'})
                next()
            }
            res.json({status: 'libro agregado!', book}) // mi gran error fue que en Postman, no estaba enviando mi body en formato JSON sino en formato de texto. Me tomó 2-3 horas descubrirlo.
        }) 
    }
    
    function findBook (req, res, next) { // esta función te regresa un libro en específico
        booksModel.find( {"_id": req.params.id}, (err, resFindBook) => {
            if (err) {
                res.json({status: 'error'})
                next()
            }
            res.send({resFindBook})
        })
    } // me tomó 4 horas en aprender que el router no acepta Numbers ni Strings con espacios
    
    function editBook (req, res, next) { // esta función edita un libro 
        const newVals = req.body
        booksModel.update( {"_id": req.params.id}, {idLibro: newVals.idLibro, titulo: newVals.titulo, paginas: newVals.paginas, descripcion: newVals.descripcion}, (err, raw) => {
            if (err) {
                res.json({status: 'error'})
                next()
            }
            res.json({status: 'Success! Book updated!', newVals})
        })
    }
    
    function deleteBook (req, res, next) { // esta función borra un libro
        booksModel.deleteOne( {"_id": req.params.id}, (err) => {
            if (err) {
                res.json({status: 'error'})
                next()
            }
            res.json({status: 'Book succesfully deleted!'})
        })
    } 
}

//3.3 EXPORTING FUNCTIONS
module.exports = { findAllBooks, addBook, findBook, editBook, deleteBook}