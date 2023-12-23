const Blog = require("../../models/blog");

const updateBlog = async (blogId, blog) => {
  try {
    const result = await Blog.findOneAndUpdate(blogId, blog);
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = updateBlog;
