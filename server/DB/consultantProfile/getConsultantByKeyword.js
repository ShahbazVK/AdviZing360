const prisma = require("..");
const getConsultantByKeywordPrisma = (keyword) => {
  return prisma.tutorProfile.findMany({
    include: {
      keywords: {
        select: {
          keyword: true,
        },
        where: {
          keyword: {
            keyword: {
              contains: keyword,
              mode: "insensitive",
            },
          },
        },
      },
    },
  });
};
module.exports = getConsultantByKeywordPrisma;
