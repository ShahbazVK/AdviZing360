const chatTransformer = (data) => {
  return {
    id: data.id,
    sender: data.sender,
    recipient: data.recipient,
    content: data.content,
    timestamp: data.timestamp,
  };
};

const getMessagesTransformer = (data) => {
  const messages = [];
  data.forEach((message) => messages.push(chatTransformer(message)));
  return [...messages];
};

module.exports = { chatTransformer, getMessagesTransformer };
