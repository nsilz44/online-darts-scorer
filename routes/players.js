const express = require('express');
const fs = require('fs');
const router = express.Router();

router
    .route('/')
    .get((req, res) =>
    fs.readFile('./routes/players.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log('File read failed:', err);
            return;
        }
        try {;
            let playerList = jsonString;
            res.json(playerList);
        } catch (err) {
            console.error(err);
        }
    }))
    .post((req, res) => {

    });
router
    .route('/new')
    .post((req, res) => {

    });
module.exports = router;
