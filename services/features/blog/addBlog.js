const Blog = require("../../../models/blog");

const addBlog = async (blogData) => {
  const blog = new Blog(blogData);
  try {
    const result = await blog.save();
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = addBlog;
