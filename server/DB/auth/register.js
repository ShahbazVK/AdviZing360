const prisma = require("..");

const registerPrisma = async (data) => {
  console.log(data);
  return prisma.user.create({
    data,
  });
};
module.exports = registerPrisma;
