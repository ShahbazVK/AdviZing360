const prisma = require("..");
const searchKeywordPrisma = (query) => {
  return prisma.keyword.findMany({
    where: {
      keyword: {
        contains: query,
        mode: "insensitive",
      },
    },
  });
};
module.exports = searchKeywordPrisma;
