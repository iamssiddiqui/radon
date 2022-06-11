const authorsModel= require("../models/authorsModel");
const bookModel = require("../models/bookModel");

const createNewAuthor= async function (req, res) {
    let data = req.body;
    let savedData = await authorsModel.create(data)
    res.send({msg: savedData})
}

const createNewBook = async function (req, res) {
    const reqBook = req.body;
    const saved = await bookModel.create(reqBook)
    res.send({msg : saved})
}


const allBooks = async function (req, res) {
    let a = await authorsModel.find({"author_name" : "chetan bhagat"})
    let b = a[0].author_id
    let c = await bookModel.find({author_id: b})
    res.send({msg: c})
}

// const getBooksbyChetanBhagat = async function(req, res){
//     let data = await authorsModel.find({"author_name" : "chetan bhagat"})
//     let bookData = await bookModel.find({author_id:data[0].author_id})
//     res.send({msg:bookData})
// }

const updatedBookPrice = async function (req, res) {
    let bookDetails = await bookModel.find({"name":"two states"})
    let id = bookDetails[0].author_id
    let authorN = await authorsModel.find({author_id:id}).select({author_name:1, _id:0})
    let bkName = bookDetails[0].name
    let updatedPrice = await bookModel.findOneAndUpdate({name:bkName}, {price:100}, {new:true}).select({price:1, _id:0})
     res.send({msg:authorN, updatedPrice})
}

const authorsName = async function (req, res) {
const booksId = await bookModel.find({price: {$gte:50, $lte:100}}).select({author_id:1, _id:0})
const id = booksId.map(inp => inp.author_id)

let temp = []
for(let i=0; i<id.length; i++){
    let x = id[i]
    const author = await authorsModel.find({author_id:x}).select({author_name:1, _id:0})
    temp.push(author)
}
     const authorName = temp.flat()

     res.send({msg: authorName})
}


module.exports.createNewAuthor= createNewAuthor
module.exports.createNewBook= createNewBook
module.exports.allBooks= allBooks
module.exports.updatedBookPrice= updatedBookPrice
module.exports.authorsName= authorsName

