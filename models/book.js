const mongoose = require("mongoose");

const User = mongoose.model(
  "Book",
  new mongoose.Schema({
    id: String,
    title: String,
    author: String,
    description: String,
    cover: String,
  })
);

module.exports = User;
