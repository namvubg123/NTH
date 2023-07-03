const express = require("express");
const router = express.Router();
const orderController = require("../controller/order");
const middlewareController = require("../controller/middleware");

router.get(
  "/history/order",
  middlewareController.verifyToken,
  orderController.getAllOrders
);

router.get(
  "/history/:orderId",
  middlewareController.verifyToken,
  orderController.getOrderById
);

router.post(
  "/history/create",
  middlewareController.verifyToken,
  orderController.createOrder
);

router.put(
  "/history/update/:orderId",
  middlewareController.verifyTokenAndAdminAuth,
  orderController.updateOrderStatus
);

module.exports = router;
