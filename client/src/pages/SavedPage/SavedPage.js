import React, {  useState, useEffect } from 'react'
import SavedContext from '../../utils/SavedContext'
import SavedDisplay from '../../components/SavedDisplay'
import NavBar from '../../components/NavBar'
import BookAPI from '../../utils/BookAPI'



const { getBooks, deleteBook } = BookAPI

const SavedPage = () => {

   const [savedState, setSavedState] = useState({
    savedBooks: []
  })

savedState.handleRemoveBook = (id) => {
  deleteBook(id)
    .then(() => {
      let savedBooks = JSON.parse(JSON.stringify(savedState.savedBooks))
      let savedFiltered = savedBooks.filter(saved => saved._id !== id)
      setSavedState({ ...savedState, savedBooks: savedFiltered })
      console.log(savedState.savedFiltered)
    })
    .catch(e => console.error(e))
}

  useEffect(() => {
    getBooks()
        .then(({ data: savedBooks }) => {
          setSavedState({ ...savedState, savedBooks })
          console.log(savedBooks)
        })
        .catch(e => console.error(e))
  //  eslint-disable-next-line
  }, [])
  
  return (
        <SavedContext.Provider value={savedState}>
          <NavBar />
        <SavedDisplay />
    </SavedContext.Provider>
  )
  
}

export default SavedPage

