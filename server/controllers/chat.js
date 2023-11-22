const getMessagesPrisma = require("../DB/chat/getMessages");
const sendMessagePrisma = require("../DB/chat/sendMessage");
const asyncWrapper = require("../middlewares/async");
const {
  chatTransformer,
  getMessagesTransformer,
} = require("../transformers/chat/chat");

const sendMessage = asyncWrapper(async (req, res) => {
  const { message, recipientId } = req.body;
  const messageResp = await sendMessagePrisma(
    req.user.id,
    recipientId,
    message
  );
  res.json(messageResp); //just send response
});

const getPreviousMessages = asyncWrapper(async (req, res) => {
  const { recipientId } = req.query;
  const messageResp = await getMessagesPrisma(req.user.id, recipientId);
  // console.log(messageResp);
  res.json(getMessagesTransformer(messageResp)); //just send response
});
module.exports = { sendMessage, getPreviousMessages };
