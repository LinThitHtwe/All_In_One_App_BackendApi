const Bookmark = require("../../../models/bookmark");

const deleteBookmark = async (bookmarkId) => {
  try {
    const result = await Bookmark.findByIdAndDelete(bookmarkId);
    return result;
  } catch (error) {
    return { error: error };
  }
};

module.exports = deleteBookmark;
