const jwt = require("jsonwebtoken");
require("dotenv").config();
const messages = require("../messages/messages");
function authenticateToken(req, res, next) {
  const token = req.header("Authorization")?.split(" ")[1];
  console.log("token---", token);
  if (!token) {
    return res.status(401).json({ message: messages.unAuthorized });
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: messages.forbidden });
    }
    req.user = user;
    next();
  });
}

module.exports = authenticateToken;
