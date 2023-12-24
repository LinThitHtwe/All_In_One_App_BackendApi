const router = require("express").Router();

const {
  addReaction,
  deleteReaction,
} = require("../controllers/reaction.controller");

router.post("/add", addReaction);
router.delete("/delete:reactionId", deleteReaction);

module.exports = router;
