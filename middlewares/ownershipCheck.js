const blogModel = require("../models/blogModel");
const ownershipCheck = async (req, res, next) => {
  try {
    const  userId  = req.headers.userid;
    console.log("owenership userId in backend", userId)
    const { id: blogId } = req.params;
    console.log("owernership blogId in backend", blogId)
    const blog = await blogModel.findById(blogId);
    console.log("owernership getting this blog", blog)
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
