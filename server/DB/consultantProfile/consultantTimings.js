const prisma = require("..");
const consultantTimingsPrisma = (tutorId) => {
  return prisma.tutorProfile.findUnique({
    where: {
      tutorId: parseInt(tutorId),
    },
    select: {
      availability: true,
    },
  });
};
module.exports = consultantTimingsPrisma;
