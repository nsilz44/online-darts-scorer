const express = require('express');
const fs = require('fs');
const router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.json());

router
    .route('/')
    .get((req, res) => {
        function filterByValue (array, string) {
            return array.filter(o =>
                Object.keys(o).some(k => o[k].toString().toLowerCase().includes(string.toLowerCase())));
        }
        const keyword = req.query;
        var value = keyword.name;
        fs.readFile('./routes/practice.json', 'utf8', (err, listOld) => {
            if (err) {
                console.log(err);
            } else {
                var list = JSON.parse(listOld);
                var ale = filterByValue(list, value);
                }
                res.json(ale);
            });
        })
    .post((req, res) => {
        var json = req.body;
        fs.readFile('./routes/practice.json', 'utf8', (err, listOld) => {
            if (err) {
                console.log('File read failed:', err);
            } else {
                var practiceList = JSON.parse(listOld);
                var newPractice = json;
                practiceList.push(newPractice);
                var mol = JSON.stringify(practiceList);
                fs.writeFile('./routes/practice.json', mol, (err) => {
                    if (err) {
                        console.log(err);
                    }
                });
                res.send(req.body);
            }
        });
    });
    module.exports = router;
