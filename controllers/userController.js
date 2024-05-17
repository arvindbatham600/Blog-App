const zod = require("zod");
const userModel = require("../models/userModel");

// creating user schema for validation using zod
const zodUserSchema = zod.object({
  username: zod.string(),
  email: zod.string().email(),
  password: zod.string().min(8),
});

const inputValiation = (username, email, password) => {
  const validity = zodUserSchema.safeParse({ username, email, password });

  if (validity.success) {
    return true;
  } else {
    return false;
  }
};

// resistration controller
const registerController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const valid = inputValiation(username, email, password);
    if (!valid) {
      return res.status(403).send({
        success: false,
        message: "inputs are not correct",
      });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(403).send({
        success: false,
        message: "email already registered",
      });
    }
    // await userModel.create({ username, email, password });
    const user = new userModel({ username, email, password });
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
