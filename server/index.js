const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3010;
const fs = require('fs');

app.get('/users', async (req, res) => {
  res.sendFile(path.resolve(__dirname, '../', 'index.html'));
  let db = fs.readFileSync(path.resolve(__dirname, '../DB/users.json'));
  let users = JSON.parse(db);

  res.header('Access-Control-Allow-Origin', '*');
  res.send(users);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}...`);
});
