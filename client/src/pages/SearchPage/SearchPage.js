import React, { useContext, createContext, useState } from 'react'
import SearchContext from '../../utils/SearchContext'

import Search from '../../components/Search'
import Display from '../../components/Display'

import axios from 'axios'



const SearchPage = () => {

  const [searchState, setSearchState] = useState({
    book: '',
    books: []
  })


  searchState.handleInputChange = event => {
    setSearchState({ ...searchState, [event.target.name]: event.target.value})
  }

  searchState.handleInputForm = event => {
    event.preventDefault()
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchState.book}`)
    .then(({ data }) => {
   let books = JSON.parse(JSON.stringify(searchState.books))
   let book = ''
   books = []
   books.push(data)
   setSearchState({ ...searchState, books, book })
    })
    .catch(e => console.error(e))
  }

  searchState.saveBook = event => {
    let bookInfo = []
    searchState.books.map(book => book.items.map(next => {
     
     let bookObj = {
       title: next.volumeInfo.title,
       author: next.volumeInfo.authors,
       description: next.volumeInfo.description,
       img: next.volumeInfo.imageLinks.smallThumbnail,
       link: next.volumeInfo.InfoLink
     }
     bookInfo.push(bookObj)
     }))
   
   
  
  }




  return (
    <SearchContext.Provider value={searchState}>
        <Search />
        <Display />
    </SearchContext.Provider>
  )
}

export default SearchPage