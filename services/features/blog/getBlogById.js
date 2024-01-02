const Blog = require("../../../models/blog");

const getBlogById = async (blogId) => {
  try {
    const result = await Blog.findById(blogId).populate("user");
    return result;
  } catch (error) {
    return { error: error };
  }
};

module.exports = getBlogById;
