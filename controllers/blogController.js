const mongoose = require("mongoose");
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
    // creating mongoose session
    const session = await mongoose.startSession();
    session.startTransaction();
    await newBlog.save({ session });
    // pushing this blog to the userdata blog field
    user.blogs.push(newBlog);
    await user.save({ session });
    await session.commitTransaction();
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
    const blog = await blogModel.findOneAndDelete(id).populate("user");
    await blog.user.blogs.pull(blog); // it will remove the blog from the user database
    await blog.user.save();
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

// get user blogs
const getUserBlogController = async (req, res) => {
  try {
    const { userId } = req.body;
    const blog = await userModel.findById(userId).populate('blogs');
    if (!blog) {
      return res.status(404).send({
        success: false,
        messsage : "This user has no blogs"
      })
    }
    const blogs = blog.blogs;
    return res.status(200).send({
      success: true,
      message: "user blogs found",
      blogs,
      
    })
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "error in get-user blog controller",
      error
    })
  }
};

module.exports = {
  getAllBlogController,
  createBlogController,
  updateBlogController,
  getSingleBlogController,
  deleteBlogController,
  getUserBlogController,
};
