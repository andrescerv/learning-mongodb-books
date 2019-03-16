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
//ejercicios de Mike https://github.com/andrescerv/learning-mongodb-books/blob/master/readme.md
//----------------------------------------------------------------------------------------------
app.get('/', (req, res) => {
    res.json({message:'bienvenido a Book Show!'})
})

app.get('/libros', librosControllers.findAll) // Entrega todos los libros

app.post('/libros/new', librosControllers.addBook) // Agrega un libro

app.get('/libros/:id', librosControllers.findBook) // Entrega los datos del libro solicitado

app.post('/libros/:id/edit', librosControllers.editBook) // Actualiza un libro

app.post('/libros/:id/delete', librosControllers.deleteBook) // Borra un libro


//1.5 LISTENER
app.listen(port, () => {
    console.log(`App escuchando port ${port}`)
})