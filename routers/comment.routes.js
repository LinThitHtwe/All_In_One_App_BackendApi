const router = require("express").Router();

const {
  addComment,
  getCommentByBlog,
} = require("../controllers/comment.controller");
router.post("/add", addComment);
router.get("/blog/:blogId", getCommentByBlog);

module.exports = router;
