//1.1 IMPORTS AND CONSTANTS
const mongoose = require('mongoose')
const express = require('express') // EXPRESS tiene BODYPARSER
const app = express()
const port = 3000

const booksControllers = require('./controllers/books') // importa los controllers
const authorsControllers = require('./controllers/authors')

//1.2 MIDDLEWARES
    //1.2.1 EXPRESS
app.use(express.urlencoded({extended: true})) // parsing
app.use(express.json())
    //1.2.2 MONGOOSE 
mongoose.connect('mongodb://localhost:27017/bookShow', { useNewUrlParser: true} )

//1.3 MODELS
const librosModel = require('./models/books') // este paso se vuelve redundante ya que se pasó a controllers/books.js (línea 2)

{//1.4 ROUTES
    app.get('/', (req, res) => {
        res.json({message:'bienvenido a Book Show!'})
    })

    { // importación de funciones de DB BOOKS
        app.get('/books', booksControllers.findAllBooks) // Entrega todos los libros

        app.post('/books/new', booksControllers.addBook) // Agrega un libro

        app.get('/books/:id', booksControllers.findBook) // Entrega los datos del libro solicitado

        app.post('/books/:id/edit', booksControllers.editBook) // Actualiza un libro

        app.post('/books/:id/delete', booksControllers.deleteBook) // Borra un libro
    }

    { // importación de funciones de DB AUTHORS
        app.get('/authors', authorsControllers.findAllAuthors) // Entrega todos los autores

        app.post('/authors/new', authorsControllers.addAuthor) // Agrega un autor

        app.get('/authors/:id', authorsControllers.findAuthor) // Entrega los datos del autor solicitado

        app.post('/authors/:id/edit', authorsControllers.editAuthor) // Actualiza un autor

        app.post('/authors/:id/delete', authorsControllers.deleteAuthor) // Borra un autor
    }
}

//1.5 LISTENER
app.listen(port, () => {
    console.log(`App escuchando port ${port}`)
})