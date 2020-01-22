const { Book } = require('../models')
const axios = require('axios')

module.exports = app => {
  // GET ALL BOOKS 
  app.get('/books', (req, res) => {
    Book.find({})
        .then(books => res.json(books))
        .catch(e => console.error(e))
  })

  // Save a book to db
  app.post('/books', (req, res) => {
      Book.create(req.body)
        .then(book => res.json(book))
        .catch(e => console.error(e))
  })

  app.delete('/books/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id)
        .then(() => res.sendStatus(200))
        .catch(e => console.error(e))
  })




}