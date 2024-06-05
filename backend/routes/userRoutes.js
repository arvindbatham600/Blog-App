const express = require("express");
const { 
  getAllUser,
  registerController,
  loginController,
} = require("../controllers/userController");
const inputValiationMiddleware = require("../middlewares/userInputValidation");

const router = express.Router();


router.post("/register", inputValiationMiddleware, registerController);
router.post("/login", inputValiationMiddleware, loginController);
router.get("/all-user", getAllUser);
module.exports = router;
