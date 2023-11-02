const prisma = require("..");
const getConsultantPrisma = (tutorId) => {
  return prisma.tutorProfile.findUnique({
    where: {
      tutorId: parseInt(tutorId),
    },
    include: {
      tutor: {
        select: {
          availability: true,
          avatar: true,
          bio: true,
          id: true,
          username: true,
        },
      },
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
