const mongoose = require('mongoose');
let URI = 'mongodb://localhost:27017/bookDB';

module.exports.initiateConnection = async (req,res) => {
    await mongoose.connect(URI).catch((err)=>{
        console.log("Stuck in a problem");
    });
    console.log("Connected to DB");
}

