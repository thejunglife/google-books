import React, { useContext} from 'react'
import SearchContext from '../../utils/SearchContext'


const Search = () => {

const { book, handleInputChange, handleInputForm } = useContext(SearchContext)

  return(
    <form>
      <p>
        <label htmlFor="book">book</label>
        <input type='text' name='book' id='book' value={book} onChange={handleInputChange}/>
      </p>
      <p>
        <button onClick={handleInputForm}>Search</button>
      </p>
    </form>
  )
}

export default Search