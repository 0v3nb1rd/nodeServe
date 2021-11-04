const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');
const port = process.env.PORT || 8080;

app.use(express.static('./client')); // add static folder as middleware

app.get('/:name', (req, res) => {
  const { name } = req.params;
  const usersFilePath = path.join(__dirname, name);

  res.header('Content-Type', 'application/json'); // Add app.json header
  res.header('Access-Control-Allow-Origin', '*'); // allow CORS

  if (fs.existsSync(usersFilePath)) {
    try {
      const file = fs.readFileSync(usersFilePath, 'utf8');
      res.send(file);
    } catch (err) {
      console.log(err.message);
    }
  } else {
    res.status(404);
    res.send('404 Sorry, file not found :-(');
    console.log('404');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}...`);
});
