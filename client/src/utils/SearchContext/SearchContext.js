import { createContext } from 'react'

const SearchContext = createContext({
  book: '',
  books: [],
  handleInputChange: () => {},
  handleInputForm: () => {},
  saveBook: () => {}
})

export default SearchContext

