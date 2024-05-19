const blogModel = require("../models/blogModel");
const ownershipCheck = async (req, res, next) => {
  try {
    const { userId } = req.body;
    const { id: blogId } = req.params;
    const blog = await blogModel.findById(blogId);
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "blog not found",
      });
    }
    if (blog.user.toString() !== userId) {
      return res.status(404).send({
        success: false,
        message: "unauthorized user",
      });
      }
      
      next();

  } catch (error) {
    res.status(500).send({
      success: false,
      message: "error in ownership check",
      error,
    });
  }
};

module.exports = ownershipCheck;
