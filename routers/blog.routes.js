const router = require("express").Router();

const { addBlog } = require("../controllers/blog.controller");

router.get("/", addBlog);

module.exports = router;
