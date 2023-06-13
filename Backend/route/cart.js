const router = require("express").Router();
const cartController = require("../controller/cart");

router.post("/cart/addItem", cartController.addItemToCart);

router.get("/cart/getItem", cartController.getCart);

router.delete("/cart/empty-cart", cartController.emptyCart);

module.exports = router;
