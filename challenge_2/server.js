const express = require('express');
const app = express();
const port =  3000;
const bodyParser = require('body-parser')
app.use(express.static('client'))

var test = [];

// app.use(function (req, res, next){

//   next();
// })

removeLinebreaks = function(str) {
  return str.replace("/r/n"," ");
}

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/reports', (req, res,) => {
  res.send(test[0])
})

app.post('/api/reports', (req, res) => {
  console.log(req.body.cvsForm)
  value = req.body.cvsForm
  test.push(value)
  res.status(201)
  res.redirect('/')
  // res.send('Got a post request!')
})



app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})