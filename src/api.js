const express = require('express'); // Import the Express framework
const Database = require('./db'); // Import your Database class


class Api {
  constructor(config) {
    this.app = express(); // Create an instance of the Express framework
    this.db = new Database(config); // Create an instance of your Database class with the given configuration
    this.db.connect(); // Connect to the database

    // Set up a basic route to test that the server is running
    this.app.get('/', (req, res) => {
      res.json({ "Tittle": "Hello World" });
    });

    // Set up the router for the API routes
    this.app.use('/api', this.router());
  }

  // Define the router for the API routes
  router() {
    const router = express.Router(); // Create an instance of the Express router

    // Define the GET method for the /data endpoint
    router.get('/data', async (req, res) => {
      const latestOnly = req.query.latestOnly;

      if (latestOnly) {
        // Make a query to your MySQL database to get the latest entry
        const results = await this.db.query('SELECT * FROM th ORDER BY fecha DESC LIMIT 1');
        res.send(results[0]); // Send the latest entry as a response to the API request (assuming the query returns only one row)
      } else {
        // Make a query to your MySQL database to get all data
        const results = await this.db.query('SELECT * FROM th');
        res.send(results); // Send all data as a response to the API request
      }
    });

    return router; // Return the router
  }

  // Start the server
  start(port) {
    this.app.listen(port, () => {
      console.log(`Server started on port ${port}!`);
    });

    // Gracefully handle process termination
    process.on('SIGINT', () => {
      this.db.disconnect();
      process.exit();
    });
  }
}

module.exports = Api; // Export the Api class
