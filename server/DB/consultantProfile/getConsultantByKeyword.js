const prisma = require("..");
const getConsultantByKeywordPrisma = (keyword) => {
  // console.log(subject);
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
