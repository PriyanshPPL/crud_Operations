const mongoose = require('mongoose');
const {initiateConnection} = require('./connectDB');
const Model = require('./bookModel');
const {search} = require('./searchBook');

const deleteBook = async (req,res)=>{
    await initiateConnection();
    let searchValue="";
    let del=false;
    try{
        del = await Model.deleteOne({"_id": req.body})
    }
    catch(e){
        searchValue=await search(req);
        console.log(searchValue.body);
    }
    return{
        statusCode: 200,
        body: del.acknowledged?JSON.stringify(del):searchValue.body
    }
}

