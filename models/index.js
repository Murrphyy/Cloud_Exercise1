const mongoose = require("mongoose");
mongoose.connect( process.env.MONGODB_URI ||
    "mongodb://127.0.0.1:27017/booksData",{ useNewUrlParser: true ,useFindAndModify: false});

module.exports.books = require("./books.js");
