const prisma = require("..");
const getAppointmentAsUserPrisma = (id) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      appointmentsAsUser: {
        include: {
          tutor: {
            select: {
              username: true,
              id: true,
            },
          },
        },
      },
    },
  });
};
module.exports = getAppointmentAsUserPrisma;
