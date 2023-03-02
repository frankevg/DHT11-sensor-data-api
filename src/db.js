// Import the MySQL module
const mysql = require('mysql');

// Database class
class Database {
  constructor(config) {
    // Create a connection to the database using the given configuration
    this.connection = mysql.createConnection(config);
  }

  // Connect to the database
  connect() {
    this.connection.connect((err) => {
      if (err) {
        // Log an error message if the connection fails
        console.error('Error connecting to MySQL database: ' + err.stack);
        return;
      }
      // Log a success message if the connection succeeds
      console.log('Connected to MySQL database!');
    });
  }

  // Disconnect from the database
  disconnect() {
    this.connection.end((err) => {
      if (err) {
        // Log an error message if the disconnection fails
        console.error('Error closing MySQL connection: ' + err.stack);
        return;
      }
      // Log a success message if the disconnection succeeds
      console.log('MySQL connection closed!');
    });
  }

  // Execute a SQL query and return a promise with the results
  query(sql, params) {
    return new Promise((resolve, reject) => {
      this.connection.query(sql, params, (error, results, fields) => {
        if (error) {
          // Log an error message if the query fails
          console.error('Error making query to MySQL database: ' + error.stack);
          reject(error);
        } else {
          // Log the query results if the query succeeds
          console.log('Query results: ', results);
          resolve(results);
        }
      });
    });
  }
}

// Export the Database class
module.exports = Database;
