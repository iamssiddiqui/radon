const express = require('express');
//const externalModule = require('./logger')
const router = express.Router();


//Solution 01
// router.get('/movies', function (req, res) {
//  const movies = ['rang de basanti', 'the shining', 'lord of the rings', 'batman begins']
//     res.send(movies)
// });


//Solution 02 and 3
// router.get('/movies/:indexNumber', function(req, res) {
//     const movies = ['rang de basanti', 'the shining', 'lord of the rings', 'batman begins']
//     const indexNumber = req.params.indexNumber;
//     const result = movies[(indexNumber-1)]
//      if (indexNumber>movies.length){
//         res.send('use a valid index')
//     } else{
//             res.send(result)
//         }
// });

//Solution 04

// router.get('/films', function (req, res){
//     const films = [ 
//         { id: 1, name: 'The Shining' }, 
//         { id: 2, name: 'Incendies' }, 
//         { id: 3, name: 'Rang de Basanti' }, 
//         { id: 4, name: 'Finding Nemo' }
//     ]
//   res.send(films)  
// });

//Solution 05

router.get('/films/:filmId', function(req, res) {
    const filmId=req.params.filmId;
    const films = [ 
        { id: 1, name: 'The Shining' }, 
        { id: 2, name: 'Incendies' }, 
        { id: 3, name: 'Rang de Basanti' }, 
        { id: 4, name: 'Finding Nemo' }
    ]
     for (i=0; i<films.length; i++){
         if(filmId==films[i].id){
             res.send(films[i])
             return
         }
     }
      res.send("No movie with this id")
    });

module.exports = router;
// adding this comment for no reason