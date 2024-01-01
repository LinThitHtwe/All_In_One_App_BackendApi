const router = require("express").Router();

const {
  addBlog,
  deleteBlog,
  getAllBlog,
  getBlogById,
  updateBlog,
  getLatestBlog,
} = require("../controllers/blog.controller");
const authenticateToken = require("../middleware/verifyJwt");

router.get("/all", getAllBlog);
router.post("/add", authenticateToken, addBlog);
router.get("/detail/:blogId", getBlogById);
router.put("/update/:blogId", updateBlog);
router.patch("/delete/:blogId", deleteBlog);
router.get("/latest", getLatestBlog);

module.exports = router;
