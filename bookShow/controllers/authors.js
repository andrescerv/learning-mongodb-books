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
        
    }

    function findAuthor (req, res, next) {
        
    }

    function editAuthor (req, res, next) {
        
    }

    function deleteAuthor (req, res, next) {
        
    }
}

//3.3 EXPORT
module.exports = { findAllAuthors, addAuthor, findAuthor, editAuthor, deleteAuthor}