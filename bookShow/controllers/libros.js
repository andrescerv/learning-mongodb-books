//3.1 IMPORTS 
const libroModel = require('../models/libros') // importando el modelos

//3.2 FUNCTIONS 
function findAll (req, res, next) { // esta función te regresa toda la db
    libroModel.find( {}, (err, resFindAll) => {
        if ( err ){
            next(err)
        } 
            res.json({data: resFindAll})
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

// function findBook (req, res, next) { // esta función te regresa un libro en específico
//     const id = req.params.idLibro
//     console.log(id)
//     libroModel.find( {"idLibro": id}, (err, resFindOne) => {
//         if (err) {
//             res.json({status: 'error'})
//             next()
//         }
//         res.json({data: resFindOne})
//     })
// }
        // let data = {
        //     "query": {
        //         "id": req.params.idLibro
        //     }
        // }
        // librosModel.find( {"id": req.params.idLibro}, (err, resFindOne) => {
        //     if (err) {
        //         res.json({status: 'error'})
        //         next(err)
        //     }
            // res.json()
            // next()
        // })

// function editBook (req, res, next) {

// }

// function deleteBook (req, res, next) {

// } 

//3.3 EXPORT
module.exports = { findAll, addBook }