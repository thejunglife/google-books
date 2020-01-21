// fixes the proxy error message
host: 0.0.0.0
port: 3000

const MONGODB_URI = "mongodb://localhost/googlebooks";
module.exports = require('mongoose').connect(MONGODB_URI, {
  // these methods are rarely used
  useCreateIndex: true,
  useFindAndModify: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})