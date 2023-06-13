const express = require("express");
const router = express.Router();
const {
  createCategory,
  getCategory,
  updateCategories,
  deleteCategories,
} = require("../controller/category.js");
const middlewareController = require("../controller/middleware");

//Create category
router.post(
  "/category/create",
  middlewareController.verifyTokenAndAdminAuth,
  createCategory
);

//Get categories
router.get("/category/get", getCategory);

//Update categories
router.post("/category/update", updateCategories);

//Delete categories
router.delete("/category/delete/:id", deleteCategories);

module.exports = router;
