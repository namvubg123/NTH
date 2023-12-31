const Product = require("../model/product");
exports.products = async () => {
  const products = await Product.find().populate("category", "name");
  return products;
};
exports.productById = async (id) => {
  const product = await Product.findById(id);
  return product;
};
exports.createProduct = async (payload) => {
  const newProduct = await Product.create(payload);
  return newProduct;
};
exports.removeProduct = async (id) => {
  const product = await Product.findByIdAndRemove(id);
  return product;
};
