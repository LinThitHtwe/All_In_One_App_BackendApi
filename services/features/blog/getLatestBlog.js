const Blog = require("../../../models/blog");

const getLatestBlog = async () => {
  try {
    const result = await Blog.findOne().sort({ createdAt: -1 });
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = getLatestBlog;
