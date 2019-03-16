//3.1 IMPORTS 
const librosModel = require('../models/libros') // importa tus modelos

//3.2 FUNCTIONS
// function 

function findAll (req, res, next) { // esta función te regresa toda la db
    librosModel.find( {}, (err, resFindAll) => {
        if ( err ){
            next(err)
        } 
            res.json({data: resFindAll})
    })
}

// function addBook (req, res, next) { // esta función agrega un nuevo libro a la DB
//     const libro = new librosModel(req.body)
//     libro.save( (err, resAddBook) => {
//         if ( err ) {
//             res.json({status: 'error'})
//             next()
//         }
//         res.json({status: 'libro agregado!', libro})
//     }) 
// }

// function findOne (req, res, next) { // esta función te regresa un libro en específico
    // // let data = {
    // //     "query": {
    // //         "id": req.params.idLibro
    // //     }
    // // }
    // // librosModel.find( {"id": req.params.idLibro}, (err, resFindOne) => {
    // //     if (err) {
    // //         res.json({status: 'error'})
    // //         next(err)
    // //     }
    //     res.json()
    //     next()
    // // })
// }

// function setOne (req, res, next) {

// }

// function delBook (req, res, next) {

// } 

//3.3 EXPORT
module.exports = { findAll }