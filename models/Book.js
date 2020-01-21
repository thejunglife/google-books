module.exports = (model, Schema) => {
  const Book = new Schema({
      title: String,
      authors: String,
      description: String,
      image: String,
      link: String,
      isSaved: Boolean
  })
  return model('Book', Book)
}