const express = require("express");
const {
  getAllBlogController,
  createBlogController,
  updateBlogController,
  getSingleBlogController,
  deleteBlogController,
} = require("../controllers/blogController");
const blogInputValidation = require("../middlewares/blogInputValidation");

// router object
const router = express.Router();

// get all blogs
router.get("/all-blog", getAllBlogController);

// create blog
router.post("/create-blog", blogInputValidation, createBlogController);

// updagte blog
router.put("/update-blog/:id", updateBlogController);

// get single Blog
router.get("/get-blog/:id", getSingleBlogController);

// delete blog
router.delete("/delete-blog/:id", deleteBlogController);

// export
module.exports = router;
