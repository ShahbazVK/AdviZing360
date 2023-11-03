const prisma = require("..");
const createConsultantProfilePrisma = (data, subject) => {
  return prisma.tutorProfile.create({
    data: {
      ...data,
      keywords: {
        create: [
          {
            keyword: {
              create: {
                keyword: subject,
              },
            },
          },
        ],
      },
    },
  });
};
module.exports = createConsultantProfilePrisma;
