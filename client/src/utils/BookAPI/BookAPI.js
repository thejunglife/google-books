import axios from 'axios'

const BookAPI = {
  getBooks: () => axios.get('/books'),
  deleteBook: (id) => axios.delete(`/books/${id}`)
}

export default BookAPI
