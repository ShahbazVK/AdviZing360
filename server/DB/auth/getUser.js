const prisma = require("..");

const findUserPrisma = async (email) => {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
};
module.exports = findUserPrisma;
