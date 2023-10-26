const prisma = require("..");
const getConsultantPrisma = (tutorId) => {
  return prisma.tutorProfile.findUnique({
    where: {
      tutorId: parseInt(tutorId),
    },
    include: {
      tutor: true,
    },
  });
};
module.exports = getConsultantPrisma;
