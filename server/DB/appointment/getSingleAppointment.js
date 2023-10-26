const prisma = require("..");
const getSingleAppointmentAsConsultantPrisma = (id) => {
  return prisma.appointment.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      user: true,
    },
  });
};

const getSingleAppointmentAsUserPrisma = (id) => {
  return prisma.appointment.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      tutor: true,
    },
  });
};

module.exports = {
  getSingleAppointmentAsConsultantPrisma,
  getSingleAppointmentAsUserPrisma,
};
