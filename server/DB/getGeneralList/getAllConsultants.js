const prisma = require("..");
const getAllConsultantsPrisma = () => {
  return prisma.tutorProfile.findMany({
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
