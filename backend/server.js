require('dotenv').config(); // Load environment variables

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 5000;

var cors = require('cors');
app.use(cors());

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
app.post('/api/insert/Artifact', (req, res) => {
    console.log('Insert Artifact called');
    const { artifactName, origin } = req.body;
    const query = `INSERT INTO Artifact (artifactName, origin) VALUES (?, ?)`;
    db.query(query, [artifactName, origin], (err, result) => {
      if (err) {
        console.error('Error inserting Artifact data:', err);
        res.status(500).send('Error inserting Artifact data');
        return;
      }
      console.log('Artifact data inserted successfully');
      res.send('Artifact data inserted successfully');
    });
});

app.post('/api/insert/AppearsIn', (req, res) => {
    console.log('Insert AppearsIn called');
    const { artifactName, taleName } = req.body;
    const query = `INSERT INTO AppearsIn (artifactName, taleName) VALUES (?, ?)`;
    db.query(query, [artifactName, taleName], (err, result) => {
      if (err) {
        console.error('Error inserting AppearsIn data:', err);
        res.status(500).send('Error inserting AppearsIn data');
        return;
      }
      console.log('AppearsIn data inserted successfully');
      res.send('AppearsIn data inserted successfully');
    });
  });

app.post('/api/insert/BelongsTo', (req, res) => {
  console.log('Insert BelongsTo called');
  const { artifactName, characterName } = req.body;
  const query = `INSERT INTO BelongsTo (artifactName, characterName) VALUES (?, ?)`;
  db.query(query, [artifactName, characterName], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Error inserting data into BelongsTo table' });
      return;
    }
    res.status(200).json({ message: 'Data inserted successfully into BelongsTo table' });
  });
});

app.post('/api/insert/Creature', (req, res) => {
    console.log('Insert Creature called');
    const { characterName, characterDescription, supernaturalAbility, species } = req.body;
    const query = `INSERT INTO Creature (characterName, characterDescription, supernaturalAbility, species) VALUES (?, ?, ?, ?, ?)`;
    db.query(query, [characterName, characterDescription, supernaturalAbility, species], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Error inserting data into Creature table' });
        return;
      }
      res.status(200).json({ message: 'Data inserted successfully into Creature table' });
    });
  });

app.post('/api/insert/Location', (req, res) => {
    const { locationName, areaDescription, timePeriod } = req.body;
    const query = `INSERT INTO Location (locationName, areaDescription, timePeriod) VALUES (?, ?, ?)`;
    db.query(query, [locationName, areaDescription, timePeriod], (err, result) => {
        if (err) {
            console.error('Error inserting AppearsIn data:', err);
            res.status(500).send('Error inserting AppearsIn data');
            return;
        }
      console.log('AppearsIn data inserted successfully');
      res.send('Location data inserted successfully');
    });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
