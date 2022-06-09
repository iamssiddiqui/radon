const { count } = require("console")
const BookModel= require("../models/bookModel")

//first solution
const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

//second solution
const getBooksData= async function (req, res) {
let bookList = await BookModel.find().select( { authorName: 1, bookName: 1 } )
res.send({msg: bookList})
}

//third solution
const getBooksInYear= async function (req, res) {
let bookList = await BookModel.find( { publish_year: "2022" } )
res.send({msg: bookList})
}

//fourth solution
const getParticularBooks= async function (req, res) {
    let key = Object.keys(req.body)
    let value = Object.values(req.body)
    let bookList = await(BookModel.find({[key] : value}))
res.send({msg: bookList})
}

//fifth solution
const getXINRBooks= async function (req, res) {
    let allBooks = await BookModel.find({
$or: [{"prices.indianPrice" : "100"}, {"prices.indianPrice" : "200"}, {"prices.indianPrice" : "500"}]})
res.send({msg: allBooks})
}

//sixth solution
const getRandomBooks= async function (req, res) {
let bookList = await BookModel.find({ $or: [{stock: { $gt: 0}},{page:{$gt:500}}]})
res.send({msg: bookList})
}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksInYear = getBooksInYear
module.exports.getParticularBooks = getParticularBooks
module.exports.getXINRBooks = getXINRBooks
module.exports.getRandomBooks = getRandomBooks