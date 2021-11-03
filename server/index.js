const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

console.log('hello -------', __dirname);

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../', 'index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}...`);
});
