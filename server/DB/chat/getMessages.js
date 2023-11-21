const prisma = require("..");

const getMessagesPrisma = (senderId, recipientId) => {
  senderId = parseInt(senderId);
  recipientId = parseInt(recipientId);
  return prisma.message.findMany({
    where: {
      senderId: { in: [recipientId, senderId] },
      recipientId: { in: [recipientId, senderId] },
    },
  });
};
module.exports = getMessagesPrisma;
