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
  queryStr = 'INSERT INTO `customer` (`name`,`email`,`password`,`cc`,`cc_exp`,`ccv`,`address1`,`address2`,`city`,`state`,`zip`, `billzip`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?)'
  params = [req.body.data['name'],req.body.data["email"],req.body.data["password"], req.body.data["cc"], req.body.data["cc_exp"],req.body.data["ccv"], req.body.data["address1"], req.body.data["address2"], req.body.data["city"], req.body.data["state"], req.body.data["zip"], req.body.data["billzip"]]
  db.query(queryStr, params, (err) => {
      if (err) {
        console.log(err)
        res.sendStatus(500)
      } else {
        console.log(req.body)
        console.log(req.body.data)
        res.status(201).send('Yo this post work')
      }
    }
  );
})

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})