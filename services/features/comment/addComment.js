const Comment = require("../../../models/comment");

const addComment = async (commentData) => {
  const comment = new Comment(commentData);
  try {
    const result = await comment.save();
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = addComment;
