const prisma = require("..");
const getConsultantPrisma = (tutorId) => {
  return prisma.tutorProfile.findUnique({
    where: {
      tutorId: parseInt(tutorId),
    },
    include: {
      tutor: true,
      keywords: {
        select: {
          keyword: {
            select: {
              keyword: true,
            },
          },
        },
      },
    },
  });
};
module.exports = getConsultantPrisma;
