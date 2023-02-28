const { json } = require('express');
const express = require('express');
const mysql = require('mysql');

const app = express();

//Settings
app.set('json spaces', 2);

// Set up MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_th'
});

// Connect to MySQL
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database!');
});

// Create a GET method for your API
app.get('/api/data', (req, res) => {
  const latestOnly = req.query.latestOnly;

  if (latestOnly) {
    // Make a query to your MySQL database to get the latest entry
    connection.query('SELECT * FROM th ORDER BY timestamp_field DESC LIMIT 1', (error, results, fields) => {
      if (error) {
        console.error('Error making query to MySQL database: ' + error.stack);
        return;
      }
      console.log('Query results: ', results);
      // Send the latest entry as a response to the API request
      res.send(results[0]); // assuming the query returns only one row
    });
  } else {
    // Make a query to your MySQL database to get all data
    connection.query('SELECT * FROM th', (error, results, fields) => {
      if (error) {
        console.error('Error making query to MySQL database: ' + error.stack);
        return;
      }
      console.log('Query results: ', results);
      // Send all data as a response to the API request
      res.send(results);
    });
  }
});


//routes
app.get('/', (req, res) => {
  res.json({ "Tittle": "Hellow World" });
  
});
// Start your server
app.listen(3000, () => {
  console.log('Server started on port 3000!');
  
  // Close the MySQL connection when the server shuts down
  process.on('SIGINT', () => {
    connection.end((err) => {
      if (err) {
        console.error('Error closing MySQL connection: ' + err.stack);
        return;
      }
      console.log('MySQL connection closed!');
      process.exit();
    });
  });
});
