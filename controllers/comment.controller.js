const addCommentService = require("../services/features/comment/addComment");
const messages = require("../messages/messages");

const addComment = async (req, res) => {
  try {
    const commentData = req.body;
    const result = await addCommentService(commentData);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: messages.serverError });
  }
};

module.exports = {
  addComment,
};
