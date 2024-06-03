const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const secretKey = process.env.JWT_SECRET;

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(401).send({
      success: false,
      message: "Access denied. No token provided.",
    });
  }

  const token = authHeader.split(" ")[1]; // Extract the token

  if (!token) {
    return res.status(401).send({
      success: false,
      message: "Access denied. No token provided.",
    });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).send({
      success: false,
      message: "Invalid token.",
    });
  }
};

module.exports = authMiddleware;
