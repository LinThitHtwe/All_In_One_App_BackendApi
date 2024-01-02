const Blog = require("../../../models/blog");
const updateBlog = async (blogId, blog) => {
  try {
    const result = await Blog.findOneAndUpdate({ _id: blogId }, blog, {
      new: true,
    });
    return result;
  } catch (error) {
    return { error: error };
  }
};

module.exports = updateBlog;
