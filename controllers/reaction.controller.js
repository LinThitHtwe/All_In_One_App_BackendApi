const messages = require("../messages/messages");
const addReactionService = require("../services/features/reaction/addReaction");
const deleteReactionService = require("../services/features/reaction/deleteReaction");

const addReaction = async (req, res) => {
  try {
    const reactionData = req.body;
    const result = await addReactionService(reactionData);
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: messages.serverError });
  }
};

const deleteReaction = async (req, res) => {
  try {
    const reactionId = req.params.reactionId;
    const result = await deleteReactionService(reactionId);
    if (result.error) {
      return res.status(404).json({ message: messages.notFound });
    }
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: messages.serverError });
  }
};

module.exports = {
  addReaction,
  deleteReaction,
};
