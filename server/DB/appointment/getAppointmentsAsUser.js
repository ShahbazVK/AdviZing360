const prisma = require("..");
const getAppointmentAsUserPrisma = (id) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      appointmentsAsUser: true,
    },
  });
};
module.exports = getAppointmentAsUserPrisma;
