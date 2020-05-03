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
        try {
            const playerList = jsonString;
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
router
    .route('/delete')
    .post((req, res) => {
    fs.readFile('./routes/players.json', 'utf8', (err, oldlist) => {
        if (err) {
            console.log('File read failed:', err);
            return;
        }
        try {
            for (id in deleteList) {
                var index = oldlist.findIndex(a => a.id === id);
                if (index > -1) {
                    oldlist.splice(index, 1);
                }
            }
        } catch (err) {
            console.log(err);
        }
    });
    });

module.exports = router;
