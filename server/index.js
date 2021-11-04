const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 8080;
const fs = require('fs');

app.use(express.static('./client')); // add static folder as middleware

app.get('/:name', async (req, res) => {
  res.header('Content-Type', 'application/json'); // Add app.json header
  res.header('Access-Control-Allow-Origin', '*'); // allow CORS

  const { name } = req.params;
  const usersFilePath = path.join(__dirname, name);

  if (fs.existsSync(usersFilePath)) {
    try {
      const file = fs.readFileSync(usersFilePath, 'utf8');
      res.send(file);
    } catch (err) {
      console.log(err.message);
    }
  } else {
    res.status(404);
    res.send('Sorry, file not found :-(');
    console.log('404');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}...`);
});
