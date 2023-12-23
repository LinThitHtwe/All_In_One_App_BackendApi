const Blog = require("../../models/blog");

const getAllBlog = async () => {
  try {
    const result = await Blog.find().sort({ createdAt: -1 });
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = getAllBlog;
