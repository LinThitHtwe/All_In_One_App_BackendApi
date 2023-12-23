const User = require("../../models/user");

const addUser = async (userData) => {
  const user = new User(userData);
  try {
    const result = await user.save();
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = addUser;
