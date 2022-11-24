const mongoose = require('mongoose');
const {inititateConnection} = require('./connectDB');
const Model=require('./bookModel');
const {search} = require('./searchBook');

const update = async(req,res)=>{
    await inititateConnection();
    let searchValue="";
    let update = {acknowledged:false};
    try{
        let updateValue = await JSON.parse(req.body);
        update = await Model.updateOne(updateValue[0],updateValue[1])
    }
    catch(e){
        update={acknowledged:false};
    }

    if(!update.acknowledged){
        searchValue = await search(req);
    }

    return {
        statusCode:200,
        body:update.acknowledged?JSON.stringify(update):searchValue.body
    }

}

module.exports={update}