import React, { useState } from 'react'
import SearchContext from '../../utils/SearchContext'

import Search from '../../components/Search'
import Display from '../../components/Display'
import NavBar from '../../components/NavBar'

import axios from 'axios'



const SearchPage = () => {

  const [searchState, setSearchState] = useState({
    book: '',
    books: []
  })

// input change
  searchState.handleInputChange = event => {
    setSearchState({ ...searchState, [event.target.name]: event.target.value})
  }

  // show books from google API
  searchState.handleInputForm = event => {
    event.preventDefault()
    axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchState.book}`)
    .then(({ data }) => {
      console.log(data)
   let books = JSON.parse(JSON.stringify(searchState.books))
   let book = ''
   books = []
   books.push(data)
   setSearchState({ ...searchState, books, book })
    })
    .catch(e => console.error(e))
  }
// save books to db 
  searchState.saveBook = event => {
    let bookInfo = []

    searchState.books.map(book =>
     book.items.map(next => 
      {
     let bookObj = {
       title: next.volumeInfo.title,
       authors: next.volumeInfo.authors,
       description: next.volumeInfo.description,
       img: next.volumeInfo.imageLinks.smallThumbnail,
       link: next.volumeInfo.infoLink,
       isSaved: true
     }
     return bookInfo.push(bookObj)
     } ))
     let savedBook = bookInfo[event.target.id]
     console.log(savedBook)
     console.log(event.target.id)
    axios.post(`/books`, savedBook)
      .then(() => {
        console.log('success')
      })
      .catch(e => console.error(e))
     
     console.log(savedBook)
   
  
  }




  return (
    <SearchContext.Provider value={searchState}>
      <NavBar />
        <Search />
        <Display />
    </SearchContext.Provider>
  )
}

export default SearchPage