const prisma = require("..");
const createConsultantProfilePrisma = (data) => {
  return prisma.tutorProfile.create({
    data: {
      ...data,
    },
  });
};
module.exports = createConsultantProfilePrisma;
