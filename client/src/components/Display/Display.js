import React, { useContext} from 'react'
import SearchContext from '../../utils/SearchContext'

import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
// import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  card: {
    maxWidth: 345
  },
  media: {
    height: 140
  }
})

const Display = () => {

const { books, saveBook } = useContext(SearchContext)

const classes = useStyles()

  return books.map(book =>
    book.items.map((next, i) => (
      <Card className={classes.card} variant="outlined">
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h1">
              {next.volumeInfo.title}
            </Typography>
            <Typography gutterBottom variant="h5" component="h3">
              {next.volumeInfo.authors}
            </Typography>
            <CardMedia
              className={classes.media}
              image={next.volumeInfo.imageLinks.smallThumbnail}
              title="Contemplative Reptile"
            />
            <Typography variant="body2" color="textSecondary" component="p">
              {next.volumeInfo.description}
            </Typography>
          </CardContent>
        </CardActionArea>

        <button onClick={saveBook} id={i}>
         Save
        </button>
        <Button size="small" color="primary">
          <a
            href={next.volumeInfo.infoLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            View
          </a>
        </Button>
      </Card>
    ))
  )
}

export default Display
   