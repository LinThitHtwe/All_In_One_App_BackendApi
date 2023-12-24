const router = require("express").Router();
const blogRoutes = require("./blog.routes");
const userRoutes = require("./user.routes");
const commentRoutes = require("./comment.routes");
const bookmarkRoutes = require("./bookmark.routes");

router.use("/blog", blogRoutes);
router.use("/auth", userRoutes);
router.use("/comment", commentRoutes);
router.use("/bookmark", bookmarkRoutes);

module.exports = router;
