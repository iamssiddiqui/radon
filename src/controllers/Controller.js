const bookModel = require("../models/bookModel")
const authorModel = require("../models/authorModel")
const publisherModel = require("../models/publisherModel")
const mongoose = require('mongoose');
const ObjectId = mongoose.Types.ObjectId

const createAuthor = async function (req, res) {
    let data = req.body;
    let saveData = await authorModel.create(data);
    res.send({ msg: saveData });
}

const createPublisher = async function (req, res) {
    let data = req.body;
    let saveData = await publisherModel.create(data);
    res.send({ msg: saveData });
}

const createBook = async function (req, res) {
    let data = req.body;
    if (!data.author || !data.publisher)
        res.send({ msg: "Author ID/Publisher ID is required" })
    else if (!ObjectId.isValid(data.author) || !ObjectId.isValid(data.publisher))
        res.send({ msg: "The Author/Publisher is not present" })
    else {
        let saveData = await bookModel.create(data);
        res.send({ msg: saveData });
    }
}

const listAllBooks = async function (req, res) {
    let getData = await bookModel.find().populate(['author', 'publisher'])
    res.send({ msg: getData })
}

const updateBooks = async function (req, res) {
    let publisherId = await publisherModel.find({ name: { $in: ["Penguin", "HarperCollins"] } }).select("_id");
    let updateData 
    for (let i = 0; i < publisherId.length; i++){
        updateData= await bookModel.updateMany({publisher:publisherId[i]._id },  {$set: { isHardCover:true } })
    }
    let authorId = await authorModel.find({ rating: { $gt: 3.5 } }).select("_id")
    let updatedData;
    for (let i = 0; i < authorId.length; i++) {
         updatedData = await bookModel.updateMany({ author: authorId[i]._id }, { $inc: { price: 10 } })
    }
    res.send({ msg1: updateData, msg2: updateData })
}
 
module.exports.listAllBooks = listAllBooks;
module.exports.createAuthor = createAuthor;
module.exports.createBook = createBook;
module.exports.createPublisher = createPublisher;
module.exports.updateBooks = updateBooks;
