// get the client
const mysql = require('mysql2');


// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'ag76',
  database: 'checkout',
  password: 'D@nc3D@nc3'
});

// simple query
connection.query(
  'SELECT * FROM `customer`',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

module.exports.connection = connection