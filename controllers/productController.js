const Product = require("../model/Product");

//get all products
const product_all = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
};

//single product
const product_detailes = async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.json(product);
  } catch (error) {
    res.json({ message: error });
  }
};

//add new product
const product_create = async (req, res) => {
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
    image: req.body.image,
    detailes: req.body.detailes,
  });

  try {
    const savedProduct = await product.save();
    res.send(savedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

//update product
const product_update = async (req, res) => {
  try {
    const product = {
      title: req.body.title,
      price: req.body.price,
      image: req.body.image,
      detailes: req.body.detailes,
    };

    const updateProduct = await Product.findByIdAndUpdate(
      { _id: req.params.productId },
      product
    );
    res.json(updateProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

//delete product
const product_delete = async (req, res) => {
  try {
    const removeProduct = await Product.findByIdAndDelete(req.params.productId);
    res.json(removeProduct);
  } catch (error) {
    res.json({ message: error });
  }
};

module.exports = {
  product_all,
  product_detailes,
  product_create,
  product_update,
  product_delete,
};
