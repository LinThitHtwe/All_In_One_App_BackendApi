const User = require("../../../models/user");

const getUserByEmailLogin = async (email) => {
  try {
    const result = await User.findOne({ email });
    if (!result) {
      throw new Error("User found");
    }
    return result;
  } catch (error) {
    return { error: error };
  }
};

module.exports = getUserByEmailLogin;
