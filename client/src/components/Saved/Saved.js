import React, { useContext} from 'react'
import SavedContext from '../../utils/SavedContext'

const Saved = () => {



const { book2 } = useContext(SavedContext)

  return(
 <h1>{book2}</h1>
  )
}

export default Saved