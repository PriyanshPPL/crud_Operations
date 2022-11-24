const mongoose = require('mongoose');
const {initiateConnection} = require('./connectDB.js');
const Model = require('./bookModel')
URL = 'mongodb://localhost:27017/signupDB';
const {books1,books2} = require('./bookList')
const insertAll = async (req,res)=>{
    initiateConnection();
    await Model.create(books1);
    await Model.create(books2);
    return {
        statusCode: 200,
        body: JSON.stringify("All books are added")
    }
}

module.exports={insertAll};