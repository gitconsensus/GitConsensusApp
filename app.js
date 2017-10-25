const express = require('express')
const app = express()
const routes = require('./routes')

const index = require('./routes/index')
const hello = require('./routes/hello');
// Connect routes to application
app.use('/', index);
app.use('/hello', hello);


app.get('/', (req, res) => {
  res.send('<h1>I love consensus!</h1>')
})

// Turn on server!
app.listen(3000, () => {
  console.log('The application is listening on port 3000')
})
