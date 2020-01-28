import React, { useContext} from 'react'
import SearchContext from '../../utils/SearchContext'

import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';

import IconButton from '@material-ui/core/IconButton';

import SearchIcon from '@material-ui/icons/Search';


const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));


const Search = () => {

  const classes = useStyles();
const { book, handleInputChange, handleInputForm } = useContext(SearchContext)

  return (
    <Paper component="form" className={classes.root}>
      <InputBase name='book' id='book' value={book} onChange={handleInputChange}
        className={classes.input}
        placeholder="Search Books..."
        inputProps={{ 'aria-label': 'search books' }}
      />
      <IconButton onClick={handleInputForm} type="submit" className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default Search
