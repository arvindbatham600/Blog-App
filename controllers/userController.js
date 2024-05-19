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

// login controller
const loginController = async (req, res) => {
  try {
    const {  email, password } = req.body;
    // checking if the email exists or not
    const exists = await userModel.findOne({ email });
    if (!exists) {
      return res.status(404).send({
        success: false,
        message: "user is not registered",
      });
    }
    // checking the password
    const passwordCheck = await bcrypt.compare(password, exists.password);
    if (!passwordCheck) {
      return res.status(404).send({
        success: false,
        message: "Invalid credentials",
      });
    } else {
      return res.status(200).send({
        success: true,
        message: "user authenticated",
        exists,
      });
    }
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "error in login callback",
      error,
    });
  }
};

// get all users
const getAllUser = async (req, res) => {
  try {
    const users = await userModel.find({});
    return res.status(200).send({
      success: true,
      message: "got all users data",
      users
    })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "error in getAllUser callback",
      error,
    });
  }
};

module.exports = {
  getAllUser,
  registerController,
  loginController,
};
