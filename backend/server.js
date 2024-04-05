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
    const query = `INSERT INTO Creature (characterName, characterDescription, supernaturalAbility, species) VALUES (?, ?, ?, ?)`;
    db.query(query, [characterName, characterDescription, supernaturalAbility, species], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Error inserting data into Creature table' });
        return;
      }
      res.status(200).json({ message: 'Data inserted successfully into Creature table' });
    });
  });

app.post('/api/insert/Deity', (req, res) => {
  console.log('Insert Deity called');
  const { deityName, characterDescription, domain, supernaturalAbility, culture } = req.body;
  const query = `INSERT INTO Deity (deityName, characterDescription, domain, supernaturalAbility) VALUES (?, ?, ?, ?)`;
  db.query(query, [deityName, characterDescription, domain, supernaturalAbility], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Error inserting data into Deity table' });
      return;
    }
    res.status(200).json({ message: 'Data inserted successfully into Deity table' });
  });
});

app.post('/api/insert/Location', (req, res) => {
    console.log('Insert Location called');
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

app.post('/api/insert/Mortal', (req, res) => {
  console.log('Insert Mortal called');
  const { characterName, characterDescription, title, profession } = req.body;
  const query = `INSERT INTO Mortal (characterName, characterDescription, title, profession) VALUES (?, ?, ?, ?)`;
  db.query(query, [characterName, characterDescription, title, profession], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Error inserting data into Mortal table' });
      return;
    }
    res.status(200).json({ message: 'Data inserted successfully into Mortal table' });
  });
});

// Fetch data in MySQL
app.get('/api/fetch/Pantheon', (req, res) => {
  console.log('Fetch Pantheon called');
  const query = "SELECT * FROM Pantheon;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Pantheon data:', err);
      res.status(500).send('Error fetching Pantheon data');
    } else {
      console.log('Pantheon data fetched successfully');
      res.json(results);
    }
  });
});

// Update data in MySQL
app.put('/api/update/Pantheon', (req,res) => {
  console.log('Update Pantheon called');
  const { originalCulture, newCulture, pantheonName } = req.body;
  const query = 'UPDATE Pantheon SET culture = ?, pantheonName = ? WHERE culture = ?';
  db.query(query, [newCulture, pantheonName, originalCulture], (err, result) => {
    if (err) {
      console.error("Error updating Pantheon data: ", err);
      res.status(500).send('Error updating Pantheon data');
      return;
    }
    console.log("Pantheon data updated successfully");
    res.send('Pantheon data updated successfully');
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
