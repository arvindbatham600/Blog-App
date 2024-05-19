const zod = require("zod");

// blog zod Schema
const blogSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
  image: zod.string(),
  userId: zod.string(),
});

const blogInputValidation = (req, res, next) => {
  const { title, description, image, userId } = req.body;
  const valid = blogSchema.safeParse({ title, description, image, userId });
  if (!valid.success) {
    return res.status(404).send({
      success: false,
      message: "input format is wrong",
    });
  }
  next();
};

module.exports = blogInputValidation;
