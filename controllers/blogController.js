const blogModel = require("../models/blogModel");
const userModel = require("../models/userModel");

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
    const { title, description, image, userId } = req.body;
    // const blog = new blogModel({ title, description, image });
    // await blog.save();

    const user = await userModel.findById(userId);
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "user not found",
      });
    }
    const newBlog = new blogModel({ title, description, image, user: userId });
    console.log("ye create karna hai", newBlog);
    await newBlog.save();
    return res.status(200).send({
      success: true,
      message: "blog successfully created",
      newBlog,
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
    const { id } = req.params;
    const blog = await blogModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    return res.status(200).send({
      success: true,
      message: "blog updated successfully",
      blog,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "error in update blog controller",
      error,
    });
  }
};

// get single blog
const getSingleBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findById(id);
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "blog not found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "Blog found successfully",
      blog,
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "error in get single blog callback",
      error,
    });
  }
};

// delete blog
const deleteBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findByIdAndDelete(id);
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "blog not found",
      });
    }
    return res.status(200).send({
      success: true,
      message: "blog deleted successfully",
    });
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "call error in delete blog controller",
      error,
    });
  }
};

module.exports = {
  getAllBlogController,
  createBlogController,
  updateBlogController,
  getSingleBlogController,
  deleteBlogController,
};
