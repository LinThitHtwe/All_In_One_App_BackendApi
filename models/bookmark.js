const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  blog: { type: mongoose.Schema.Types.ObjectId, ref: "Blog" },
});

const Bookmark = mongoose.model("Bookmark", bookmarkSchema);
module.exports = Bookmark;
