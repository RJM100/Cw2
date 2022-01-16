const express = require('express');
const PORT = 8081;
const app = express();

app.get('/', (req, res) => {
  res.send('Manage Coinbase Users');
});

app.listen(PORT);
console.log(`Manage Coinbase Users - Running on ${PORT}`);