const mongoose = require('mongoose');
const bookModel = require('./bookModel');
const {initiateConnection} = require('./connectDB');

const bookPagination = async(req,res)=>{
    initiateConnection();
    let page=req.body;
    let bookDetails = await bookModel.find({},{title:1},{limit:10}).slice('comm',5);
    let bookCount = await bookModel.find({},{},{limit:10}).countDocuments();
    console.log(bookCount);
    return{
        statusCode: 200,
        body: JSON.stringify(bookDetails)
    }
}

module.exports={bookPagination};