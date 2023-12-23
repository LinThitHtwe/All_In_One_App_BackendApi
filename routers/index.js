const router = require("express").Router();
const blogRoutes = require("./blog.routes");

router.use("/blog", blogRoutes);

module.exports = router;
