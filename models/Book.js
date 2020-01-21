module.exports = (model, Schema) => {
  const Book = new Schema({
      title: String,
      tags: [{type: String}],
      description: String,
      img: String,
      link: String,
      isSaved: Boolean
  })
  return model('Book', Book)
}