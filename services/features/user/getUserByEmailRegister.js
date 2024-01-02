const User = require("../../../models/user");

const getUserByEmailRegister = async (email) => {
  try {
    const result = await User.findOne({ email });
    return result;
  } catch (error) {
    return { error: error };
  }
};

module.exports = getUserByEmailRegister;
