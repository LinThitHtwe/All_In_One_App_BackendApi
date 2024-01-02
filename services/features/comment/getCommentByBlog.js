const Comment = require("../../../models/comment");

const getCommentByBlog = async (blogId) => {
  try {
    const comments = await Comment.find({ blog: blogId })
      .populate("user")
      .sort({ createdAt: -1 })
      .exec();

    return comments;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

module.exports = getCommentByBlog;
