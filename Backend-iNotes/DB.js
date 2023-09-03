const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/inotebook"

const connectToMongo=()=>{
    mongoose.connect(mongoURI).then(()=>{
        console.log("Connected to Mongo Successfully")
    }).catch((e)=>{
        console.log(e);
    })
}
module.exports = connectToMongo;