const express = require("express");
const {
  getAllBlogController,
  createBlogController,
  updateBlogController,
  getSingleBlogController,
  deleteBlogController,
  getUserBlogController,
} = require("../controllers/blogController");
const blogInputValidation = require("../middlewares/blogInputValidation");
const ownershipCheck = require("../middlewares/ownershipCheck");
const { getAllUser } = require("../controllers/userController");

// router object
const router = express.Router();

// get all blogs
router.get("/all-blog", getAllBlogController);

// create blog
router.post("/create-blog", blogInputValidation, createBlogController);

// updagte blog
router.put("/update-blog/:id", ownershipCheck, updateBlogController);

// get single Blog
router.get("/get-blog/:id", getSingleBlogController);

// delete blog
router.delete("/delete-blog/:id", ownershipCheck, deleteBlogController);

// user blog route
router.post("/user-blog",getUserBlogController )

// export
module.exports = router;
