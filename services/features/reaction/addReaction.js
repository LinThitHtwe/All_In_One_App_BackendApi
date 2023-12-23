const Reaction = require("../../../models/reaction");

const addReaction = async (reactionData) => {
  const reaction = new Reaction(reactionData);
  try {
    const result = await reaction.save();
    return result;
  } catch (error) {
    return error;
  }
};

module.exports = addReaction;
