const express = require("express");
const router = express.Router();
const middlewareController = require("../controller/middleware");
const {
  createProduct,
  getProducts,
  getProductById,
  removeProduct,
  updateProduct,
} = require("../controller/product");
const multer = require("multer");
const path = require("path");
const shortid = require("shortid");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

router.post(
  "/product/create",
  middlewareController.verifyToken,
  middlewareController.verifyTokenAndAdminAuth,
  upload.single("productIMG"),
  createProduct
);

router.get("/product/getProduct", getProducts);

router.get("/product/getById/:id", getProductById);

router.put("/product/:productId", updateProduct);

router.delete(
  "/product/removeProduct/:id",
  middlewareController.verifyTokenAndAdminAuth,
  removeProduct
);

module.exports = router;
