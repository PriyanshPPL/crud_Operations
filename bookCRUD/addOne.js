const mongoose = require('mongoose');
const {initiateConnection} = require('./connectDB.js');
const Model = require('./bookModel');

const add = async (req,res) => {
    await initiateConnection();
    let toAdd = JSON.parse(req.body);
    let data = await Model.create(toAdd);
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}

module.exports={add}