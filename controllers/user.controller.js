const messages = require("../messages/messages");
const addUserService = require("../services/features/user/addUser");

const registerUser = async (req, res) => {
  try {
    const userData = req.body;
    const result = await addUserService(userData);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: messages.serverError });
  }
};

module.exports = {
  registerUser,
};
