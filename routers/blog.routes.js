const router = require("express").Router();

const {
  addBlog,
  deleteBlog,
  getAllBlog,
  getBlogById,
  updateBlog,
} = require("../controllers/blog.controller");

router.get("/all", getAllBlog);
router.post("/add", addBlog);
router.get("/detail/:blogId", getAllBlog);
router.put("/update/:blogId", updateBlog);
router.patch("/delete/:blogId", deleteBlog);

module.exports = router;
