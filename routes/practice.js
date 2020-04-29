const express = require('express');
const fs = require('fs');
const router = express.Router();

router
    .route('/')
    .get((req, res) => {

        });
router
    .route('/new')
    .post((req, res) => {
        const data = req.body;
    });
    module.exports = router;
