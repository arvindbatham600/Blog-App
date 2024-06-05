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
const authMiddleware = require("../middlewares/authMiddleware");

// router object
const router = express.Router();

// get all blogs
router.get("/all-blog",authMiddleware, getAllBlogController);

// create blog
router.post("/create-blog", authMiddleware, blogInputValidation, createBlogController);

// updagte blog
router.put("/update-blog/:id", authMiddleware, ownershipCheck, updateBlogController);

// get single Blog
router.get("/get-blog/:id", authMiddleware, getSingleBlogController);

// delete blog
router.delete("/delete-blog/:id", authMiddleware, ownershipCheck, deleteBlogController);

// user blog route
router.post("/user-blog", authMiddleware, getUserBlogController )

// export
module.exports = router;
