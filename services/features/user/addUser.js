const bcrypt = require("bcrypt");
const User = require("../../../models/user");

const addUser = async (userData) => {
  const { password } = userData;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ ...userData, password: hashedPassword });
    const result = await user.save();
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = addUser;
