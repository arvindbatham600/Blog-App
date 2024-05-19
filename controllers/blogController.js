const blogModel = require("../models/blogModel");

// get all blog
const getAllBlogController = async (req, res) => {
  try {
    const blogs = await blogModel.find({});
    if (!blogs) {
      return res.status(200).send({
        success: false,
        message: "No Blog Found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Blogs Found successFully",
      blogs,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "error in getAllBlog controller",
      error,
    });
  }
};

// create blog
const createBlogController = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const blog = new blogModel({ title, description, image });
    await blog.save();

    return res.status(200).send({
      success: true,
      message: "blog added successfully",
      blog,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "error in create blog controller",
      error,
    });
  }
};

// update blog
const updateBlogController = async (req, res) => {
    try {
        const { title, description, image } = req.body;
        const blogId = req.params;
        const blog = await blogModel.findByIdAndUpdate(blogId, {...req.body}, {new : true})
        return res.status(200).send({
            success: true,
            message: "blog updated successfully",
            blog,
        })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "error in update blog controller",
      error,
    });
  }
};

// get single blog
const getSingleBlogController = async (req, res) => {};

// delete blog
const deleteBlogController = async (req, res) => {};

module.exports = {
  getAllBlogController,
  createBlogController,
  updateBlogController,
  getSingleBlogController,
  deleteBlogController,
};
