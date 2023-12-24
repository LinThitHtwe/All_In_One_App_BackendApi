const User = require("../../../models/user");

const getUserByEmail = async (email) => {
  try {
    const result = await User.findOne({ email });
    return result;
  } catch (error) {
    return { error: error };
  }
};

module.exports = getUserByEmail;
