require('dotenv').config()
const express = require("express");
const { join } = require("path");
// const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.static(join(__dirname, 'client', 'build')))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

// Send every other request to the React app
// Define any API routes before this runs
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

// app.listen(PORT, () => {
//   console.log(`🌎 ==> API server now on port ${PORT}!`);
// });

require('./routes')(app)


require('mongoose')
  .connect(process.env.NODE_ENV === 'production' ? process.env.MONGODB_URI : 'mongodb://localhost/googlebooks', {
  // these methods are rarely used
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => app.listen(process.env.PORT || 3001))
  .catch(e => console.error(e))

