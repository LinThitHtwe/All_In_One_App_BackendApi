const addCommentService = require("../services/features/comment/addComment");
const getCommentByBlogService = require("../services/features/comment/getCommentByBlog");
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

const getCommentByBlog = async (req, res) => {
  const { blogId } = req.params;

  try {
    const comments = await getCommentByBlogService(blogId);
    res.status(200).json({ comments });
  } catch (error) {
    res.status(500).json({ error: messages.serverError });
  }
};

module.exports = {
  addComment,
  getCommentByBlog,
};
