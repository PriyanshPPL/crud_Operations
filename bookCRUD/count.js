const mongoose = require("mongoose");
const {initiateConnection} = require("./connectDB");
const Model = require("./bookModel");

const Schema = new mongoose.Schema(
    {
        count: {
            type: Number,
            require: true,
            unique: true,
        }
    },
    {collection: "Book"}
);

const CountModel = new mongoose.model("Book",Schema);

const insertCount = async (req, res) => {
    await initiateConnection();
    let totalCount = await Model.find().count();
    const count = CountModel.create({count:totalCount})
    return {
        statusCode: 200,
        body: JSON.stringify(count),
    };
};

module.exports = { insertCount };