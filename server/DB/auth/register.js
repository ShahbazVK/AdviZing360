const prisma = require("..");

const registerPrisma = async (data) => {
  return prisma.user.create({
    data,
  });
};
module.exports = registerPrisma;
