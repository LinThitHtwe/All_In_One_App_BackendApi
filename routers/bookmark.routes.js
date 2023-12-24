const router = require("express").Router();

const {
  addBookmark,
  deleteBookmark,
} = require("../controllers/bookmark.controller");

router.post("/add", addBookmark);
router.delete('/delete/"bookmarkId', deleteBookmark);

module.exports = router;
