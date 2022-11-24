const mongoose = require('mongoose');
const {initiateConnection} = require('./connectDB');
const Model = require('./bookModel');
const getAll = async (req,res)=>{
    initiateConnection();
    let bookData = await Model.find();
    let totalCount = await Model.find().count();
    let outputData = {"count":totalCount,"data":bookData};
    return {
        statusCode: 200,
        body: JSON.stringify(outputData)
    }
}
module.exports={getAll};

