const express = require('express');
const fs = require('fs');
const router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

router
    .route('/')
    .get((_req, res) =>
    fs.readFile('./routes/players.json', 'utf8', (err, jsonString) => {
        if (err) {
            console.log('File read failed:', err);
            return;
        }
        try {
            var playerList = jsonString;
            res.json(playerList);
        } catch (err) {
            console.error(err);
        }
    }));
router
    .route('/new')
    .post((req, res) => {
        var json = req.body;
        fs.readFile('./routes/players.json', 'utf8', (err, listOld) => {
            if (err) {
                console.log('File read failed:', err);
            } else {
                var playerList = JSON.parse(listOld);
                var newPlayer = json;
                playerList.push(newPlayer);
                var mol = JSON.stringify(playerList);
                fs.writeFile('./routes/players.json', mol, (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
                res.send(req.body);
            }
        });
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
