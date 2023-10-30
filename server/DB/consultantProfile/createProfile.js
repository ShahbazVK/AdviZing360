const prisma = require("..");
const createConsultantProfilePrisma = (data, subject) => {
  // console.log(subject);
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
