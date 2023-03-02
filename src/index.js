// Require the Api class from the api.js module
const Api = require('./api');

// Create a new instance of the Api class with a configuration object for the database connection
const api = new Api({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_th'
});

// Start the API by calling the start() method on the api instance and passing the desired port number
api.start(3000);
