const Bookmark = require("../../models/bookmark");

const addBookmark = async (bookmarkData) => {
  const bookmark = new Bookmark(bookmarkData);
  try {
    const result = await bookmark.save();
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = addBookmark;
