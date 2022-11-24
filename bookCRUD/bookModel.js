const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    "isbn":Number,
    "title":String,
    "subtitle":String,
    "author":String,
    "published":Date,
    "publisher":String,
    "pages":Number,
    "description":String,
    "website":String
},{collection:'Book'});

const bookModel = new mongoose.model('bookModel',bookSchema);
module.exports=bookModel;