//1.1 IMPORTS AND CONSTANTS
const mongoose = require('mongoose')
const express = require('express') // EXPRESS tiene BODYPARSER
const app = express()
const port = 3000

const librosControllers = require('./controllers/libros') // importa los controllers

//1.2 MIDDLEWARES
//1.2.1 EXPRESS
app.use(express.urlencoded({extended: true})) // parsing
app.use(express.json())
//1.2.2 MONGOOSE 
mongoose.connect('mongodb://localhost:27017/bookShow', { useNewUrlParser: true} )

//1.3 MODELS
const libroModel = require('./models/libros') // este paso se pasó a controllers.js

//1.4 ROUTES

// ejercicios de nivelación Express
// var myLogger = function (req, res, next) {
//     console.log("Logged")
//     next()
// } 
// app.use(myLogger)

// var requestTime = function (req, res, next) {
//     req.requestTime = Date.now();
//     next();
// }
// app.use(requestTime);

// app.get('/', (req, res) => {
//     // res.send('Hello world')
//     var responseText = 'Hello World!'
//     responseText += ' Requested at: ' + req.requestTime + ' ' 
//     res.send(responseText)
// })


//ejercicios de Mike https://github.com/andrescerv/learning-mongodb-books/blob/master/readme.md
//----------------------------------------------------------------------------------------------
app.get('/', (req, res) => {
    res.json({message:'bienvenido a Book Show'})
})

app.get('/libros', librosControllers.findAll) // Entrega todos los libros

app.post('/libros/nuevo', librosControllers.addBook) //	Agrega un libro

app.get('/libros/:titulo', function (req, res, next) { // creo que el router no acepta type: Number ni Strings son espacios
    console.log(req.params.titulo)
    const titulo = req.params.titulo
    libroModel.find( {"titulo": titulo}, (err, resFindOne) => {
        if (err) {
            res.json({status: 'error'})
            next()
        }
        res.send({resFindOne})
    })
}) // Entrega los datos del libro solicitado

// app.post('/libros/:id/editar', librosControllers.editBook) // Actualiza un libro

// app.post('/libros/:id/borrar', librosControllers.deleteBook) // Borra libro


//1.5 LISTENER
app.listen(port, () => {
    console.log(`App escuchando port ${port}`)
})