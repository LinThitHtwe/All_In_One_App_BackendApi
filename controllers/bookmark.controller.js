const addBookmarkService = require("../services/features/bookmark/addbookmark");
const deleteBookmarkService = require("../services/features/bookmark/deleteBookmark");
const messages = require("../messages/messages");

const addBookmark = async (req, res) => {
  try {
    const bookmarkData = req.body;
    const result = await addBookmarkService(bookmarkData);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: messages.serverError });
  }
};

const deleteBookmark = async (req, res) => {
  try {
    const bookmarkId = req.params.bookmarkId;
    const result = await deleteBookmarkService(bookmarkId);
    if (result.error) {
      return res.status(404).json({ message: messages.notFound });
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: messages.serverError });
  }
};

module.exports = {
  addBookmark,
  deleteBookmark,
};
