const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  title: String,
  price: String,
  image: String,
  detailes: String,
});

module.exports = mongoose.model("Product", productSchema);
