import React, { createContext } from 'react'

const SearchContext = createContext({
  book: '',
  handleInputChange: () => {}
})

export default SearchContext