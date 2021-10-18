const express = require('express');
const app = express();
const port =  3000;
app.use(express.static('client'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/reports', (req, res) => {
  res.send('Got a get request!')
})



app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`)
})