import React, { useContext} from 'react'
import SearchContext from '../../utils/SearchContext'

const Display = () => {

const { books, saveBook } = useContext(SearchContext)

  return(
    <div>
    {
      
      books.map(book => book.items.map((next, i) => (
        <div>
    <button><a href={next.volumeInfo.infoLink} target='_blank'>View</a></button>
    <button onClick={saveBook} id={next.volumeInfo.title}>Save</button> 
      <h1 key={i}>{next.volumeInfo.title}</h1>
      <h3>{next.volumeInfo.authors}</h3>
     <img src={next.volumeInfo.imageLinks.smallThumbnail} alt='No Image Available' />
     <p>{next.volumeInfo.description}</p>
      </div>
      )))
    }
    </div>
  )
}

export default Display