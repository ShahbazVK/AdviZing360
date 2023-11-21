const prisma = require("..");

const sendMessagePrisma = (senderId, recipientId, content) => {
  return prisma.message.create({
    data: { senderId, recipientId, content },
  });
};
module.exports = sendMessagePrisma;
