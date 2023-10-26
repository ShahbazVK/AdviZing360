const prisma = require("..");
const getAppointmentAsConsultantPrisma = (id) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
    include: {
      appointmentsAsTutor: true,
    },
  });
};
module.exports = getAppointmentAsConsultantPrisma;
