const router = require("express").Router();

const { addComment } = require("../controllers/comment.controller");
router.post("/add", addComment);

module.exports = router;
