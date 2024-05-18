const zod = require("zod");
// creating user schema for validation using zod
const zodUserSchema = zod.object({
  username: zod.string(),
  email: zod.string().email(),
  password: zod.string().min(8),
});

const inputValiationMiddleware = (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const validity = zodUserSchema.safeParse({ username, email, password });
    if (validity.success) {
      next();
    } else {
      return res.status(404).send({
        success: false,
        message: "invalid inputs",
      });
    }
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Error in inputValidation middleware",
      error,
    });
  }
};

module.exports = inputValiationMiddleware;
