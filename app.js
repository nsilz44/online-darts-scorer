const express = require('express');
const app = express();
const players = require('./routes/players');

app.use('/players', players);

app.use(express.static('client'));

module.exports = app;
