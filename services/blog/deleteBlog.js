const Blog = require("../../models/blog");

const deleteBlog = async (blogId) => {
  try {
    const result = await Blog.find().sort({ createdAt: -1 });
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = deleteBlog;
