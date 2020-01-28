import React, { useContext } from 'react'
import SavedContext from '../../utils/SavedContext'

// import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'

// const useStyles = makeStyles({
//   card: {
//     maxWidth: 345
//   },
//   media: {
//     height: 140
//   }
// })

const SavedDisplay = () => {


  // const classes = useStyles()
  
const { savedBooks, handleRemoveBook } = useContext(SavedContext)



  return (
    <div>
      {savedBooks.map(saved => (
        <Card>
          <button>
            <a href={saved.link} target="_blank" rel="noopener noreferrer">
              View
            </a>
          </button>
          <button onClick={() => handleRemoveBook(saved._id)}>Delete</button>
          <h1>{saved.title}</h1>
          <h3>{saved.authors}</h3>
          <img src={saved.img} alt="no" />
          <p>{saved.description}</p>
        </Card>
      ))}
    </div>
  )
}

export default SavedDisplay