const prisma = require("..");

const findUserPrisma = async (email) => {
  //   console.log(data);
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
};
module.exports = findUserPrisma;
