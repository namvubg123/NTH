const middlewareController = require("../controller/middleware");
const userController = require("../controller/user");

const router = require("express").Router();

//Get list users
router.get(
  "/admin/user",
  middlewareController.verifyTokenAndAdminAuth,
  userController.getAllUsers
);

//Delete User
router.delete(
  "/admin/user/:id",
  middlewareController.verifyTokenAndAdminAuth,
  userController.deleteUser
);

module.exports = router;
