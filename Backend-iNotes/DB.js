const mongoose = require("mongoose");

const mongoURI =
  "mongodb+srv://uvaishnasir:uvaish123@cluster0.9pmjpa2.mongodb.net/iNotes";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => {
      console.log("Connected to Mongo Successfully");
    })
    .catch((e) => {
      console.log(e);
    });
};
module.exports = connectToMongo;
