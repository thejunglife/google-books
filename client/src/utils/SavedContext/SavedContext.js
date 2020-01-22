import { createContext } from 'react'

const SavedContext = createContext({
        savedBooks: [],
        handleRemoveBook: () => {}
})

export default SavedContext