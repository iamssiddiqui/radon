const express = require('express');
//const logger = require('../logger/logger.js')
//const util = require('../util/helper.js')
//const validator = require('../validator/formatter.js')
//const _ = require('lodash')
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
router.get('/hello', function (req, res){

    res.send('Lodash Problem')

    //1st problem
    // const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    // const newMonth = _.chunk(month, 3)
    // console.log(newMonth)

    //2nd problem
    // const oddNumber = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    // const oddNumber1 = _.tail(oddNumber)
    // console.log(oddNumber1)

    //3rd problem
    // const arr1 = [39, 38, 7, 21, 54]
    // const arr2 = [932, 138, 139, 342, 111]
    // const arr3 = [21, 39, 43, 138, 99]
    // const arr4 = [932, 43, 7, 342, 138]
    // const arr5 = [76, 43, 56, 912, 111]
    // const mergedArray = _.union(arr1, arr2, arr3, arr4, arr5) 
    // console.log(mergedArray)

    //4th problem
//     const pairs =  [ 
//         ["horror","The Shining"],
//         ["drama","Titanic"],
//         ["thriller","Shutter Island"],
//         ["fantasy","Pans Labyrinth"]
//     ];
//    const newPair = _.fromPairs(pairs);
  
//    console.log(newPair)
})
module.exports = router;
// adding this comment for no reason
