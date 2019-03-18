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
        authorsModel.find( {"_id": req.params.id} , (err, resOneAuthor) => {
            if (err) {
                res('error!')
                next()
            }
            res.json({resOneAuthor})
        })
    }

    function editAuthor (req, res, next) {
        let newVals = req.body
        authorsModel.update( {"_id": req.params.id}, {"idAutor": newVals.idAutor, "nombre": newVals.nombre}, (err, raw) => {
            if (err) {
                res('error!')
                next()
            }
            authorsModel.find( {"_id": req.params.id} , (err, resOneAuthor) => {
                if (err) {
                    res('error!')
                    next()
                }
                res.json({message: 'Success! Author updated', resOneAuthor})
            })
        })
    }

    function deleteAuthor (req, res, next) {
       authorsModel.remove( {"_id": req.params.id}, (err) => {
           if (err) {
               res('error!')
               next()
           }
           res.json({message: 'Author deleted succesfully!'})
       }) 
    }
}

//3.3 EXPORT
module.exports = { findAllAuthors, addAuthor, findAuthor, editAuthor, deleteAuthor}