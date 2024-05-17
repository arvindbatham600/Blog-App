const express = require("express");
const { 
  getAllUser,
  registerController,
  loginController,
} = require("../controllers/userController");
const inputValiationMiddleware = require("../middlewares/inputValidationMiddleware");

const router = express.Router();

router.get("/all-user", getAllUser);
router.post("/register", inputValiationMiddleware, registerController);
router.post("/login", loginController);

module.exports = router;
