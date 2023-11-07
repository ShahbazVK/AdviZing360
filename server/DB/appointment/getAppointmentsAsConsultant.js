const prisma = require("..");
const getAppointmentAsConsultantPrisma = (id) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      appointmentsAsTutor: {
        include: {
          user: {
            select: {
              avatar: true,
              id: true,
              username: true,
            },
          },
        },
      },
    },
  });
};
module.exports = getAppointmentAsConsultantPrisma;
