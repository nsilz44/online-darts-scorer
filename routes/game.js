const express = require('express');
const fs = require('fs');
const router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

router
    .route('/')
    .post((req, res) => {
        var json = req.body;
        fs.readFile('./routes/currentgames.json', 'utf8', (err, listOld) => {
            if (err) {
                console.log('File read failed:', err);
            } else {
                var gameList = JSON.parse(listOld);
                var newGame = json;
                gameList = gameList.filter(item => item.id !== newGame.id);
                gameList.push(newGame);
                var mol = JSON.stringify(gameList);
                fs.writeFile('./routes/currentgames.json', mol, (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
                res.send(req.body);
            }
        });
    })
    .get((_req, res) =>
    fs.readFile('./routes/currentgames.json', 'utf8', (err, jsonString) => {
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
        fs.readFile('./routes/currentgames.json', 'utf8', (err, listOld) => {
            if (err) {
                console.log(err);
            } else {
                var list = JSON.parse(listOld);
                var ale = filterByValue(list, value);
                }
                res.json(ale);
            });
        });
module.exports = router;
