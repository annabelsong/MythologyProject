require('dotenv').config(); // Load environment variables

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 5000;

// Parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MySQL connection
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Connect to MySQL
db.connect((err) => {
  if (err) throw err;
  console.log('MySQL connected');
});

// Insert data into MySQL
app.post('/api/insert', (req, res) => {
    console.log('Insert called');
    const { locationName, areaDescription, timePeriod } = req.body;
    const query = `INSERT INTO locations (locationName, areaDescription, timePeriod) VALUES (?, ?, ?)`;
    db.query(query, [locationName, areaDescription, timePeriod], (err, result) => {
      if (err) throw err;
      res.send('Data inserted successfully');
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
