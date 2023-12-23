const Reaction = require("../../../models/reaction");

const deleteReaction = async (reactionId) => {
  try {
    const result = await Reaction.findByIdAndDelete(reactionId);
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = deleteReaction;
