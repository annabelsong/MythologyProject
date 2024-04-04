// backend/server.js

const express = require('express');
const oracledb = require('oracledb');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

async function initialize() {
  await oracledb.createPool({
    user: 'ora_bzhou07',
    password: 'a16079717',
    connectString: 'your_connection_string',
  });
}

initialize().catch((err) => {
  console.error('Error initializing database:', err);
  process.exit(1);
});

app.post('/api/query', async (req, res) => {
  const { query } = req.body;
  let connection;

  try {
    connection = await oracledb.getConnection();
    const result = await connection.execute(query);
    res.json(result.rows);
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).json({ error: 'Internal server error' });
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error closing connection:', err);
      }
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
