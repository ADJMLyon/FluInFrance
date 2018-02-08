const express = require('express');
const path = require('path');
const config = require('./config');
// this is part of node.js handling and transforming file paths.
const app = express();

app.use(express.static(path.join(__dirname, './data')));
app.use('/d3', express.static(path.join(__dirname, './node_modules/d3/build/d3.js')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

//listen to the server on port in config.js
console.log(`App listening on port ${config.port}`);
app.listen(config.port);
