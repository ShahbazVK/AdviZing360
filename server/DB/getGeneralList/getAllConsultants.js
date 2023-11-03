const prisma = require("..");
const getAllConsultantsPrisma = (id) => {
  return prisma.tutorProfile.findMany({
    where: {
      tutorId: {
        not: id,
      },
    },
    select: {
      id: true,
      bio: true,
      subjects: true,
      hourlyRate: true,
      availability: true,
      tutor: {
        select: {
          id: true,
          username: true,
          avatar: true,
        },
      },
    },
  });
};
module.exports = getAllConsultantsPrisma;
