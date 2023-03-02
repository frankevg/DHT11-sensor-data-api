# DHT11 Sensor Data API

This is an API for getting data from a DHT11 sensor connected to a computer via COM port and storing it in a MySQL database. The API allows clients to query the database for all data or the latest data point, and it can be run on a server to make the data accessible to remote clients.

# Getting Started
Prerequisites
  * Node.js installed on your computer.
  * A MySQL database to store the data. You will need the following information:
  * Hostname
  * Port number
  * Username
  * Password
  * Database name
  
# Installing
  * Clone the repository: git clone https://github.com/fvg1999/DHT11-sensor-data-api.git
  * Install the dependencies:
    * cd DHT11-sensor-data-api
    * npm install
  * Update the config object in api.js with your MySQL database information:
    * host: 'your-database-hostname',
    * port: 'your-database-port',
    * user: 'your-database-username',
    * password: 'your-database-password',
    * database: 'your-database-name',

# Running
To start the API, run the following command:
  * npm start
The API will start running on port 3000 by default.

# API Reference
  * GET /api/data
Retrieves all data points from the MySQL database:
GET http://localhost:3000/api/data

Response:
[  {    "id": 1,    "temperature": 25,    "humidity": 50,    "timestamp_field": "2023-02-16T15:25:36.000Z"  },  {    "id": 2,    "temperature": 24,    "humidity": 51,    "timestamp_field": "2023-02-16T15:25:41.000Z"  },  ...]

* GET /api/data?latestOnly=true
Retrieves the latest data point from the MySQL database.

Parameters
*  latestOnly (optional) - set to true to only retrieve the latest data point:
GET http://localhost:3000/api/data?latestOnly=true

# Built With
  * Node.js - JavaScript runtime environment
  * Express - Web framework for Node.js
  * MySQL - Relational database management system
# License
This project is licensed under "GNU General Public License v3.0" - see the LICENSE.md file for details.



