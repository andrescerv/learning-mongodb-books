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

// DB's JSON:
// {
//     "data": [
//         {
//             "_id": "5c8b0e450e0f7f8d7142156f",
//             "idLibro": 1,
//             "titulo": "A Game of Thrones",
//             "paginas": 401,
//             "descripcion": "the first book of RR Martin's series A Song of Fire and Ice "
//         },
//         {
//             "_id": "5c8b0e450e0f7f8d71421570",
//             "idLibro": 2,
//             "titulo": "A Clash of Kings",
//             "paginas": 402,
//             "descripcion": "the second book of RR Martin's series A Song of Fire and Ice "
//         },
//         {
//             "_id": "5c8b0e450e0f7f8d71421571",
//             "idLibro": 3,
//             "titulo": "A Storm of Swords",
//             "paginas": 403,
//             "descripcion": "the third book of RR Martin's series A Song of Fire and Ice "
//         },
//         {
//             "_id": "5c8b0e450e0f7f8d71421572",
//             "idLibro": 4,
//             "titulo": "A Feast for Crows",
//             "paginas": 404,
//             "descripcion": "the fourth book of RR Martin's series A Song of Fire and Ice "
//         },
//         {
//             "_id": "5c8b0e450e0f7f8d71421573",
//             "idLibro": 5,
//             "titulo": "A Dance with Dragons",
//             "paginas": 405,
//             "descripcion": "the fifth book of RR Martin's series A Song of Fire and Ice "
//         },
//         {
//             "_id": "5c8b0e450e0f7f8d71421574",
//             "idLibro": 6,
//             "titulo": "The Winds of Winter",
//             "paginas": 406,
//             "descripcion": "the upcoming book of RR Martin's series `A Game of Thrones` "
//         },
//         {
//             "_id": "5c8b24b463776c1c84a56ba8",
//             "idLibro": 7,
//             "titulo": "Una historia de programador",
//             "paginas": 10,
//             "descripcion": "descripcion buena",
//             "__v": 0
//         },
//         {
//             "_id": "5c8c73f97ea1131ed80c4955",
//             "idLibro": 8,
//             "titulo": "El libro de la selva",
//             "paginas": 100,
//             "descripcion": "libro infantil",
//             "__v": 0
//         },
//         {
//             "_id": "5c8c7508f8398e1628eca8a6",
//             "idLibro": 9,
//             "titulo": "Trampa mortal",
//             "paginas": 540,
//             "descripcion": "una historia de Jack Reacher",
//             "__v": 0
//         },
//         {
//             "_id": "5c8c7f949ad37d296c2ad426",
//             "idLibro": 10,
//             "titulo": "Prueba",
//             "paginas": 540,
//             "descripcion": "el titulo es una palabra",
//             "__v": 0
//         }
//     ]
// }