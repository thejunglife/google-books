const { Book } = require('../models')

module.exports = app => {
  // GET ALL BOOKS 
  app.get('/api/books', (req, res) => {
    Book.find({})
        .then(books => res.json(books))
        .catch(e => console.error(e))
  })

  app.post('/api/books', (req, res) => {
      Book.create(req.body)
        .then(book => res.json(book))
        .catch(e => console.error(e))
  })

  app.delete('/api/books/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id)
        .then(() => res.sendStatus(200))
        .catch(e => console.error(e))
  })

  // Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



}