const jwt = require("jsonwebtoken");
const messages = require("../messages/messages");
const addUserService = require("../services/features/user/addUser");
const getUserByEmailService = require("../services/features/user/getUserByEmail");
const bcrypt = require("bcrypt");
require("dotenv").config();

const registerUser = async (req, res) => {
  try {
    const userData = req.body;
    const result = await addUserService(userData);
    if (!result.error) {
      const { _id, email } = result;
      const token = jwt.sign(
        { userId: _id, email: email },
        process.env.SECRET_KEY,
        { expiresIn: "1h" }
      );
      res.json({ token });
    } else {
      res.status(400).json({ error: result.error });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: messages.serverError });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  console.log("Email---", email);
  console.log("Password---", password);
  try {
    const user = await getUserByEmailService(email);
    if (user.error) {
      return res.status(404).json({ message: messages.notFound });
    }
    console.log("userepassword---", user.password);
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: messages.invalidPassword });
    }
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: messages.serverError });
  }
};

module.exports = {
  registerUser,
  login,
};
