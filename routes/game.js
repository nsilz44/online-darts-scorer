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
    });

module.exports = router;
