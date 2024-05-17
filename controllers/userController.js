const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");

// resistration controller
const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(403).send({
        success: false,
        message: "email already registered",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ username, email, password: hashedPassword });
    await user.save();
    return res.status(200).send({
      success: true,
      message: "user regirstered successfully",
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      message: "error in registration callback",
      error,
    });
  }
};
// get all users
const getAllUser = (req, res) => {
  res.send("sending response for all users");
};
// login controller
const loginController = (req, res) => {
  res.send("sending response to login users");
};

module.exports = {
  getAllUser,
  registerController,
  loginController,
};
