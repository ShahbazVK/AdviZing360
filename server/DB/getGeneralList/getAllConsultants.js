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
          username: true,
          avatar: true,
        },
      },
    },
  });
};
module.exports = getAllConsultantsPrisma;
