require('dotenv').config(); // Load environment variables

const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 5000;

var cors = require('cors');
const { spec } = require('node:test/reporters');
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
    const { characterName, taleName } = req.body;
    const query = `INSERT INTO AppearsIn (characterName, taleName) VALUES (?, ?)`;
    db.query(query, [characterName, taleName], (err, result) => {
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
            console.error('Error inserting Location data:', err);
            res.status(500).send('Error inserting Location data');
            return;
        }
      console.log('Location data inserted successfully');
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

app.post('/api/insert/Pantheon', (req, res) => {
    console.log('Insert Pantheon called');
    const { culture, pantheonName } = req.body;
    const query = `INSERT INTO Pantheon (culture, pantheonName) VALUES (?, ?)`;
    db.query(query, [culture, pantheonName], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Error inserting data into Pantheon table' });
        return;
      }
      res.status(200).json({ message: 'Data inserted successfully into Pantheon table' });
    });
});

app.post('/api/insert/PartOf', (req, res) => {
  console.log('Insert PartOf called');
  const { characterName, taleName } = req.body;
  const query = `INSERT INTO PartOf (characterName, taleName) VALUES (?, ?)`;
  db.query(query, [characterName, taleName], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Error inserting data into PartOf table' });
      return;
    }
    res.status(200).json({ message: 'Data inserted successfully into PartOf table' });
  });
});

app.post('/api/insert/Represents', (req, res) => {
  console.log('Insert Represents called');
  const { symbolName, characterName } = req.body;
  const query = `INSERT INTO Represents (symbolName, characterName) VALUES (?, ?)`;
  db.query(query, [symbolName, characterName], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Error inserting data into Represents table' });
      return;
    }
    res.status(200).json({ message: 'Data inserted successfully into Represents table' });
  });
});

app.post('/api/insert/Ritual', (req, res) => {
    console.log('Insert Ritual called');
    const { ritualName, recurring, characterName, locationName, timePeriod } = req.body;
    const query = `INSERT INTO Ritual (ritualName, recurring, characterName, locationName, timePeriod) VALUES (?, ?, ?, ?, ?)`;
    db.query(query, [ritualName, recurring, characterName, locationName, timePeriod], (err, result) => {
      if (err) {
        console.error('Error inserting data:', err);
        res.status(500).json({ error: 'Error inserting data into Ritual table' });
        return;
      }
      res.status(200).json({ message: 'Data inserted successfully into Ritual table' });
    });
  });

app.post('/api/insert/StoryEvent', (req, res) => {
  console.log('Insert StoryEvent called');
  const { taleName, eventName, eventDescription, locationName, timePeriod } = req.body;
  const query = `INSERT INTO StoryEvent (taleName, eventName, eventDescription, locationName, timePeriod) VALUES (?, ?, ?, ?, ?)`;
  db.query(query, [taleName, eventName, eventDescription, locationName, timePeriod], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Error inserting data into StoryEvent table' });
      return;
    }
    res.status(200).json({ message: 'Data inserted successfully into StoryEvent table' });
  });
});

app.post('/api/insert/Symbol', (req, res) => {
  console.log('Insert Symbol called');
  const { symbolName, origin } = req.body;
  const query = `INSERT INTO Symbol (symbolName, origin) VALUES (?, ?)`;
  db.query(query, [symbolName, origin], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Error inserting data into Symbol table' });
      return;
    }
    res.status(200).json({ message: 'Data inserted successfully into Symbol table' });
  });
});

app.post('/api/insert/tale', (req, res) => {
  console.log('Insert Tale called');
  const { taleName, moralLesson, culture } = req.body;
  const query = `INSERT INTO Tale (taleName, moralLesson, culture) VALUES (?, ?, ?)`;
  db.query(query, [taleName, moralLesson, culture], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ error: 'Error inserting data into Tale table' });
      return;
    }
    res.status(200).json({ message: 'Data inserted successfully into Tale table' });
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

app.get('/api/fetch/AppearsIn', (req, res) => {
  console.log('Fetch AppearsIn called');
  const query = "SELECT * FROM AppearsIn;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching AppearsIn data:', err);
      res.status(500).send('Error fetching AppearsIn data');
    } else {
      console.log('AppearsIn data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/Artifact', (req, res) => {
  console.log('Fetch Artifact called');
  const query = "SELECT * FROM Artifact;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Artifact data:', err);
      res.status(500).send('Error fetching Artifact data');
    } else {
      console.log('Artifact data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/BelongsTo', (req, res) => {
  console.log('Fetch BelongsTo called');
  const query = "SELECT * FROM BelongsTo;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching BelongsTo data:', err);
      res.status(500).send('Error fetching BelongsTo data');
    } else {
      console.log('BelongsTo data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/Creature', (req, res) => {
  console.log('Fetch Creature called');
  const query = "SELECT * FROM Creature;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Creature data:', err);
      res.status(500).send('Error fetching Creature data');
    } else {
      console.log('Creature data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/Deity', (req, res) => {
  console.log('Fetch Deity called');
  const query = "SELECT * FROM Deity;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Deity data:', err);
      res.status(500).send('Error fetching Deity data');
    } else {
      console.log('Deity data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/Location', (req, res) => {
  console.log('Fetch Location called');
  const query = "SELECT * FROM Location;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Location data:', err);
      res.status(500).send('Error fetching Location data');
    } else {
      console.log('Location data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/Mortal', (req, res) => {
  console.log('Fetch Mortal called');
  const query = "SELECT * FROM Mortal;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Mortal data:', err);
      res.status(500).send('Error fetching Mortal data');
    } else {
      console.log('Mortal data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/PartOf', (req, res) => {
  console.log('Fetch PartOf called');
  const query = "SELECT * FROM PartOf;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching PartOf data:', err);
      res.status(500).send('Error fetching PartOf data');
    } else {
      console.log('PartOf data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/Represents', (req, res) => {
  console.log('Fetch Represents called');
  const query = "SELECT * FROM Represents;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Represents data:', err);
      res.status(500).send('Error fetching Represents data');
    } else {
      console.log('Represents data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/Ritual', (req, res) => {
  console.log('Fetch Ritual called');
  const query = "SELECT * FROM Ritual;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Ritual data:', err);
      res.status(500).send('Error fetching Ritual data');
    } else {
      console.log('Ritual data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/StoryEvent', (req, res) => {
  console.log('Fetch StoryEvent called');
  const query = "SELECT * FROM StoryEvent;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching StoryEvent data:', err);
      res.status(500).send('Error fetching StoryEvent data');
    } else {
      console.log('StoryEvent data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/Symbol', (req, res) => {
  console.log('Fetch Symbol called');
  const query = "SELECT * FROM Symbol;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Symbol data:', err);
      res.status(500).send('Error fetching Symbol data');
    } else {
      console.log('Symbol data fetched successfully');
      res.json(results);
    }
  });
});

app.get('/api/fetch/Tale', (req, res) => {
  console.log('Fetch Tale called');
  const query = "SELECT * FROM Tale;"
  db.query(query, (err,results) => {
    if (err) {
      console.error('Error fetching Tale data:', err);
      res.status(500).send('Error fetching Tale data');
    } else {
      console.log('Tale data fetched successfully');
      res.json(results);
    }
  });
});

// Update data in MySQL
// done need double check tho
app.put('/api/update/Pantheon', (req,res) => {
  console.log('Update Pantheon called');
  const { oldPrimaryKey, newCulture, newPantheonName } = req.body;
  const query = 'UPDATE Pantheon SET culture = ?, pantheonName = ? WHERE culture = ?';
  db.query(query, [newCulture, newPantheonName, oldPrimaryKey], (err, result) => {
    if (err) {
      console.error("Error updating Pantheon data: ", err);
      res.status(500).send('Error updating Pantheon data');
      return;
    }
    console.log("Pantheon data updated successfully");
    res.send('Pantheon data updated successfully');
  });
});

// Update data in MySQL
// done
app.put('/api/update/AppearsIn', (req,res) => {
  console.log('Update AppearsIn called');
  const { oldPrimaryKey, newName, newTaleName } = req.body;
  const query = 'UPDATE AppearsIn SET artifactName = ?, taleName = ? WHERE artifactName = ?';
  db.query(query, [newName, newTaleName, oldPrimaryKey], (err, result) => {
    if (err) {
      console.error("Error updating AppearsIn data: ", err);
      res.status(500).send('Error updating AppearsIn data');
      return;
    }
    console.log("AppearsIn data updated successfully");
    res.send('AppearsIn data updated successfully');
  });
});

//done
app.put('/api/update/Artifact', (req,res) => {
  console.log('Update Artifact called');
  const { oldPrimaryKey, newName, newOrigin } = req.body;
  const query = 'UPDATE AppearsIn SET artifactName = ?, origin = ? WHERE artifactName = ?';
  db.query(query, [newName, newOrigin, oldPrimaryKey], (err, result) => {
    if (err) {
      console.error("Error updating Artifact data: ", err);
      res.status(500).send('Error updating Artifact data');
      return;
    }
    console.log("Artifact data updated successfully");
    res.send('Artifact data updated successfully');
  });
});

//done
app.put('/api/update/BelongsTo', (req,res) => {
  console.log('Update BelongsTo called');
  const { oldPrimaryKey, oldPrimaryKey2, newName, newCharacterName } = req.body;
  const query = 'UPDATE BelongsTo SET artifactName = ?, characterName = ? WHERE artifactName = ? AND characterName = ?';
  db.query(query, [newName, newCharacterName, oldPrimaryKey, oldPrimaryKey2], (err, result) => {
    if (err) {
      console.error("Error updating BelongsTo data: ", err);
      res.status(500).send('Error updating BelongsTo data');
      return;
    }
    console.log("BelongsTo data updated successfully");
    res.send('BelongsTo data updated successfully');
  });
});

//done
app.put('/api/update/Creature', (req,res) => {
  console.log('Update Creature called');
  const { oldPrimaryKey, characterName, characterDescription, supernaturalAbility, species, culture } = req.body;
  const query = 'UPDATE Creature SET characterName = ?, characterDescription = ?, supernaturalAbility = ?, species = ?, culture = ? WHERE characterName = ?';
  db.query(query, [oldPrimaryKey, characterName, characterDescription, supernaturalAbility, species, culture], (err, result) => {
    if (err) {
      console.error("Error updating Creature data: ", err);
      res.status(500).send('Error updating Creature data');
      return;
    }
    console.log("Creature data updated successfully");
    res.send('Creature data updated successfully');
  });
});


app.put('/api/update/Deity', (req,res) => {
  console.log('Update Deity called');
  const { oldPrimaryKey, characterName, characterDescription, supernaturalAbility, species, culture } = req.body;
  const query = 'UPDATE Deity SET characterName = ?, characterDescription = ?, domain = ?, supernaturalAbility = ?, culture = ? WHERE characterName = ?';
  db.query(query, [oldPrimaryKey, characterName, characterDescription, supernaturalAbility, species, culture], (err, result) => {
    if (err) {
      console.error("Error updating Creature data: ", err);
      res.status(500).send('Error updating Creature data');
      return;
    }
    console.log("Creature data updated successfully");
    res.send('Creature data updated successfully');
  });
});


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
