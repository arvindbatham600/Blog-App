const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const secretKey = process.env.JWT_SECRET;


// resistration controller
const registerController = async (req, res) => {
  try {
    const { firstName, lastName, username, email, password } = req.body;
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(200).send({
        success: false,
        registered: true,
        message: "email already registered",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new userModel({ firstName, lastName, username, email, password: hashedPassword });
    await user.save();
    return res.status(200).send({
      success: true,
      registered: false,
      message: "user regirstered successfully",
      user,
    });
  } catch (error) {
    res.status(404).send({
      success: false,
      registered : false,
      message: "Interal Server Error",
      error,
    });
  }
};

// login controller
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    // checking if the email exists or not
    const exists = await userModel.findOne({ email });
    if (!exists) {
      return res.status(404).send({
        status : 404,
        success: false,
        message: "user is not registered",
      });
    }

    // checking the password
    const passwordCheck = await bcrypt.compare(password, exists.password);
     if (!passwordCheck) {
       return res.status(401).send({
         status : 401,
         success: false,
         message: "Invalid credentials",
       });
    }

     // Generating JWT token
     const token = jwt.sign(
       { userId: exists._id, email: exists.email },
       secretKey,
      //  { expiresIn: "1h" } // Token expiration time
    );
    

     return res.status(200).send({
       success: true,
       message: "User authenticated",
       username: exists.username,
       id: exists._id,
       token, // Return the token to the client
     });
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
      users,
    });
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
