const express = require('express');
const app = express();
const port =  3000;
const bodyParser = require('body-parser')
app.use(express.static('client'))

var test = [];

// app.use(function (req, res, next){

//   next();
// })

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/reports', (req, res,) => {
  res.send(JSON.stringify(test))
})

app.post('/api/reports', (req, res) => {
  console.log(JSON.stringify(req.body))
  console.log('Post Request Working')
  test.push(JSON.stringify(req.body))
  res.redirect('/')
  // res.send('Got a post request!')
})



app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})