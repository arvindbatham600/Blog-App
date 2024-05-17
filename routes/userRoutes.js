const express = require("express");
const {
  getAllUser,
  registerController,
  loginController,
} = require("../controllers/userController");


const router = express.Router();

router.get("/all-user", getAllUser);
router.post("/register", registerController);
router.post("/login", loginController);

module.exports = router;
