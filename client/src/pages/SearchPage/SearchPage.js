import React, { useContext, createContext, useState } from 'react'
import SearchContext from '../../utils/SearchContext'
import Search from '../../components/Search'

const SearchPage = () => {

  const [searchState, setSearchState] = useState({
    book: ''
  })

  searchState.handleInputChange = event => {
    setSearchState({ ...searchState, [event.target.name]: event.target.value})
  }

  return (
    <SearchContext.Provider value={searchState}>
        <Search />
    </SearchContext.Provider>
  )
}

export default SearchPage