const express = require('express')
const app = express()
const port = 3000
const db = require('./db').connection
var bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/customers', (req, res) => {
  db.query(
    'SELECT * FROM `customer`',
    function (err, results, fields) {
      if (err) {
        console.log(err)
      } else {
        res.status(200).send(results);
      }
      // results contains rows returned by server
      // console.log(fields);
      // fields contains extra meta data about results, if available
    }
  );
})

app.post('/api/customers', (req, res) => {
  queryStr = 'INSERT INTO `customer` (`name`,`email`,`password`,`cc`,`cc_exp`,`ccv`,`address`,`address 2`,`city`,`state`,`zip`) VALUES (?,?,?,?,?,?,?,?,?,?,?)'
  params = [req.body[0]["name"],req.body[0]["email"],req.body[0]["password"], req.body[0]["cc"], req.body[0]["cc_exp"],req.body[0]["ccv"], req.body[0]["address"], req.body[0]["address_2"], req.body[0]["city"], req.body[0]["state"], req.body[0]["zip"]]
  db.query(queryStr, params, (err) => {
      if (err) {
        console.log(err)
        res.sendStatus(500)
      } else {
        res.status(201).send('Yo this post work')
      }
    }
  );
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})