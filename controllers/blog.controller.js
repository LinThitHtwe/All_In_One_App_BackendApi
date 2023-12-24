const addBlogService = require("../services/features/blog/addBlog");
const getAllBlogService = require("../services/features/blog/getAllBlog");
const getBlogByIdService = require("../services/features/blog/getBlogById");
const updateBlogService = require("../services/features/blog/updateBlog");
const deleteBlogService = require("../services/features/blog/deleteBlog");
const messages = require("../messages/messages");

const addBlog = async (req, res) => {
  try {
    const blogData = req.body;
    const result = await addBlogService(blogData);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: messages.serverError });
  }
};

const getAllBlog = async (req, res) => {
  try {
    const result = await getAllBlogService();
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: messages.serverError });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const result = await getBlogByIdService(blogId);
    if (result.error) {
      return res.status(404).json({ message: messages.notFound });
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: messages.serverError });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const updatedData = req.body;

    const result = await updateBlogService(blogId, updatedData);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: messages.serverError });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blogId = req.params.blogId;
    const result = await deleteBlogService(blogId);
    if (result.error) {
      return res.status(404).json({ message: messages.notFound });
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: messages.serverError });
  }
};
module.exports = {
  addBlog,
  getAllBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
};
