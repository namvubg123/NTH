const productRepository = require("../common-middleware/ProductRepo");
const Product = require("../model/product.js");
const Multer = require("multer");
const shortid = require("shortid");

exports.getProducts = async (req, res) => {
  try {
    let products = await productRepository.products();
    res.status(200).json({
      status: true,
      data: products,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      error: err,
      status: false,
    });
  }
};

exports.getProductById = async (req, res) => {
  try {
    let id = req.params.id;
    let productDetails = await productRepository.productById(id);
    res.status(200).json({
      status: true,
      data: productDetails,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      error: err,
    });
  }
};
exports.removeProduct = async (req, res) => {
  try {
    let id = req.params.id;
    let productDetails = await productRepository.removeProduct(id);
    res.status(200).json({
      status: true,
      data: productDetails,
    });
  } catch (err) {
    res.status(500).json({
      status: false,
      error: err,
    });
  }
};

exports.createProduct = (req, res) => {
  const {
    name,
    price,
    salePrice,
    description,
    numReviews,
    type,
    offer,
    productIMG,
    category,
  } = req.body;

  const product = new Product({
    name: name,
    price: price,
    salePrice: salePrice,
    description: description,
    productIMG: productIMG,
    numReviews: numReviews,
    offer: offer,
    type: type,
    category: category,
  });

  product.save((error, product) => {
    if (error) return res.status(400).json({ error });
    if (product) {
      res.status(200).json({ product });
    }
  });
};

exports.updateProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findOneAndUpdate(
      { _id: productId },
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json({ product });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
