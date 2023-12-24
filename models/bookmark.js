const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Bookmark;

try {
  Bookmark = mongoose.model("Bookmark");
} catch (error) {
  const bookmarkSchema = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    blog: { type: mongoose.Schema.Types.ObjectId, ref: "Blog" },
  });

  Bookmark = mongoose.model("Bookmark", bookmarkSchema);
}

module.exports = Bookmark;
