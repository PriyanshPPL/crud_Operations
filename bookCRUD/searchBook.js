const mongoose=require('mongoose');
const {initiateConnection} = require('./connectDB');
const Model = require('./bookModel');

const search = async (req,res)=>{
    initiateConnection();
    const bookData = await Model.find();
    let searchTerm=req.body;
    let valuesFind=[];
    const keys = [
        "isbn",
        "title",
        "subtitle",
        "author",
        "published",
        "publisher",
        "pages",
        "description",
        "website",
        "country",
        "imageLink",
        "language",
        "link",
        "year",
    ]    
    bookData.map((each,i)=>{
        for(let j of keys){
            if(!each[j]){continue;}
            if(JSON.stringify(each[j]).toLowerCase().includes(searchTerm)){
                valuesFind.push(bookData[i]);
                break;
            }
        }
    })
    return{
        statusCode:200,
        body:valuesFind[0]?JSON.stringify(valuesFind):`Nothing Found for ${searchTerm}`
    }
}

module.exports={search};