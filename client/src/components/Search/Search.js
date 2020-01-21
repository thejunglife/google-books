import React, { useContext} from 'react'
import SearchContext from '../../utils/SearchContext'


const Search = () => {

const { book } = useContext(SearchContext)

  return(
    <form>
      <p>
        <label htmlFor="search">search</label>
        <input type='text' name='search' id='search'/>
      </p>
      <p>
        <button>Search</button>
      </p>
    </form>
  )
}

export default Search