const { count } = require("console")
const BookModel= require("../models/bookModel")

//first solution
const createBook= async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}

const getBooksData= async function (req, res) {

//second solution
//let allBooks = await BookModel.find().select( { authorName: 1, bookName: 1 } )


//third solution
//let allBooks = await BookModel.find( { publish_year: "2021" } )


//fourth solution
//let allBooks = await BookModel.find({ bookName: /^int/ })
//let allBooks = await BookModel.find({ authorName: /^rs/ })

//fifth solution
//let allBooks = await BookModel.find({indianprice :{$in: ["100INR", "200INR", "500INR"]}})

//sixth solution
let allBooks = await BookModel.find({ $or: [{stock: { $gt: 0}},{page:{$gt:500}}]})

res.send({msg: allBooks})
}
module.exports.createBook= createBook
module.exports.getBooksData= getBooksData