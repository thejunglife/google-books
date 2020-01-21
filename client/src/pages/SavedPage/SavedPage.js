import React, { useContext, useState, createContext } from 'react'
import SavedContext from '../../utils/SavedContext'
import Saved from '../../components/Saved'

const SavedPage = () => {

   const [savedState, setSavedState] = useState({
    book2: 'Saved page'
  })
  
  return (
        <SavedContext.Provider value={savedState}>
        <Saved />
    </SavedContext.Provider>
  )
  
}

export default SavedPage