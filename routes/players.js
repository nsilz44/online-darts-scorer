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
    .route('/search')
    .get((req, res) => {
        function filterByValue (array, string) {
            return array.filter(o =>
                Object.keys(o).some(k => o[k].toString().toLowerCase().includes(string.toLowerCase())));
        }
        const keyword = req.query;
        var value = keyword.find;
        fs.readFile('./routes/players.json', 'utf8', (err, listOld) => {
            if (err) {
                console.log(err);
            } else {
                var list = JSON.parse(listOld);
                var ale = filterByValue(list, value);
                var beer = JSON.stringify(ale);
                }
                res.json(beer);
        });
    });
router
    .route('/update')
    .post((req, res) => {
        var json = req.body;
        fs.readFile('./routes/players.json', 'utf8', (err, listOld) => {
            if (err) {
                console.log('File read failed:', err);
            } else {
                var playerList = JSON.parse(listOld);
                var newPlayer = json;
                const result = playerList.filter(item => item.ID !== newPlayer.ID);
                result.push(newPlayer);
                var mol = JSON.stringify(result);
                fs.writeFile('./routes/players.json', mol, (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
                res.send('woo');
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
                var json = req.body;
                var deleteList = json;
                deleteList.forEach(a => {
                    var index = oldlist.findIndex(a.id);
                    if (index > -1) {
                        oldlist.splice(index, 1);
                    }
                });
                var mol = JSON.stringify(oldlist);
                fs.writeFile('./routes/players.json', mol, (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
            } catch (err) {
                console.log(err);
            }
        });
    });

module.exports = router;
