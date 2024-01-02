const Blog = require("../../../models/blog");

const getAllBlog = async (startIndex = 1, limit = 10) => {
  try {
    const result = await Blog.find()
      .sort({ createdAt: -1 })
      .skip(startIndex)
      .limit(limit)
      .populate("user");
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = getAllBlog;
