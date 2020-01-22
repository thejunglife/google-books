module.exports = (model, Schema) => {
  const Book = new Schema({
      title: String,
      authors: [],
      description: String,
      img: String,
      link: String,
      isSaved: Boolean
  })
  return model('Book', Book)
}