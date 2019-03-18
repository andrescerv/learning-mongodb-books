//3.1 IMPORTS 
const authorsModel = require('../models/authors')

{//3.2 FUNCTIONS
    function findAllAuthors (req, res, next) {
        authorsModel.find( {}, (err, dbAuthors) => {
            if (err) {
                res( 'error!')
                next()
            }
            res.json( dbAuthors )
        })
    } 

    function addAuthor (req, res, next) {
        const newAuthor = new authorsModel(req.body)
        newAuthor.save( {newAuthor}, (err, resNewAuthor) => {
            if (err) {
                res('error!')
                next()
            }
            res.json({message: 'Success! Author added.', resNewAuthor})
        })
    }

    function findAuthor (req, res, next) {
        const id2 = req.params.id
        authorsModel.find( {"_id": id2} , (err, resOneAuthor) => {
            if (err) {
                res('error!')
                next()
            }
            res.json({resOneAuthor})
        })
    }

    function editAuthor (req, res, next) {
        let newVals = req.body
        let id = req.params.id
        authorsModel.update( {"_id": id}, {"idAutor": newVals.idAutor, "nombre": newVals.nombre}, (err, raw) => {
            if (err) {
                res('error!')
                next()
            }
            res.json({message: 'Success! Author updated', newVals})
        })
    }

    function deleteAuthor (req, res, next) {
       let id = req.params.id
       authorsModel.remove( {"_id": id}, (err) => {
           if (err) {
               res('error!')
               next()
           }
           res.json({message: 'author deleted succesfully!'})
       }) 
    }
}

//3.3 EXPORT
module.exports = { findAllAuthors, addAuthor, findAuthor, editAuthor, deleteAuthor}