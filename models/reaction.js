const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reactionSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  blog: { type: mongoose.Schema.Types.ObjectId, ref: "Blog" },
});

const Reaction = mongoose.model("Reaction", reactionSchema);
module.exports = Reaction;
