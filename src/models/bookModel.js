const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName: {
        type: String,
        required: true
    }, 
    authorName: String, 
    category: String,    
    isPublished: Boolean,
    publish_year: {
        type: Number, default: 2021
    },
    prices: {
        indianPrice: String,
        europePrice: String,
    },
    stock: {
        type: Number,
        default: 0
    },
    page: Number
}, { timestamps: true });


module.exports = mongoose.model('Book', bookSchema) //users
