const express = require('express');
const fs = require('fs');
const app = express();
const players = require('./routes/players');
const practice = require('./routes/practice');
const game = require('./routes/game');
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/practice', practice);

app.use('/game', game);

app.use('/players', players);

app.use(express.static('client'));

console.log('Server running at http://127.0.0.1:8090/index.html');
module.exports = app;
