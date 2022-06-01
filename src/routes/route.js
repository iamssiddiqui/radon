const express = require('express');
//const logger = require('../logger/logger.js')
//const util = require('../util/helper.js')
//const validator = require('../validator/formatter.js')
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
    //first problem
    //logger.welcome()
    //second problem
    // util.printDate()
    // util.printMonth()
    // util.batchInfo()
    //third problem
    // validator.trim()
    // validator.lower()
    // validator.upper()
});

module.exports = router;
// adding this comment for no reason