const Blog = require("../../models/blog");

const getBlogById = async (blogId) => {
  try {
    const result = await Blog.findById(blogId);
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = getBlogById;
