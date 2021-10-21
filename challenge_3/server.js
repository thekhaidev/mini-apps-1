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
  console.log(req.body[0]["name"])
  console.log(req.body[0]["email"])
  console.log(req.body[0]["password"])
  console.log(req.body[0]["cc"])
  console.log(req.body[0]["cc_exp"])
  console.log(req.body[0]["ccv"])
  console.log(req.body[0]["address"])
  console.log(req.body[0]["address_2"])
  console.log(req.body[0]["city"])
  console.log(req.body[0]["state"])
  console.log(req.body[0]["zip"])
  queryStr = 'INSERT INTO `customer` (`name`,`email`,`password`,`cc`,`cc_exp`,`ccv`,`address`,`address 2`,`city`,`state`,`zip`) VALUES (?,?,?,?,?,?,?,?,?,?,?)'
  params = ['key2', 'keeey@123.com', '123', '010101011234', '1230','123', '1048', null, 'dungy', 'ca', '12345']
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