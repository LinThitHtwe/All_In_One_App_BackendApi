const jwt = require("jsonwebtoken");
const messages = require("../messages/messages");
const addUserService = require("../services/features/user/addUser");
const getUserByEmailService = require("../services/features/user/getUserByEmail");
const bcrypt = require("bcrypt");
const getUserByEmail = require("../services/features/user/getUserByEmail");
require("dotenv").config();

const registerUser = async (req, res) => {
  try {
    const userData = req.body;
    const emailExists = await getUserByEmail(userData.email);
    if (emailExists) {
      return res.status(400).json({ error: "Email already exists." });
    }

    const result = await addUserService(userData);

    if (!result.error) {
      const { _id, email } = result;
      const token = jwt.sign(
        { userId: _id, email: email },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );
      res.json({ token, user: result });
    } else {
      res.status(400).json({ error: result.error });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await getUserByEmailService(email);
    if (user.error) {
      return res.status(404).json({ message: messages.notFound });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: messages.invalidPassword });
    }
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.json({ token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: messages.serverError });
  }
};

module.exports = {
  registerUser,
  login,
};
