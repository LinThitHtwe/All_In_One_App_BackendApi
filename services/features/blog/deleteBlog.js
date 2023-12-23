const Blog = require("../../../models/blog");

const deleteBlog = async (blogId) => {
  try {
    const result = await Blog.updateOne({ _id: blogId }, { isDeleted: true });
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = deleteBlog;
