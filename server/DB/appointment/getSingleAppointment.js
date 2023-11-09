const prisma = require("..");
const getSingleAppointmentAsConsultantPrisma = (id) => {
  return prisma.appointment.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      user: {
        select: {
          id: true,
          username: true,
        },
      },
    },
  });
};

const getSingleAppointmentAsUserPrisma = (id) => {
  return prisma.appointment.findUnique({
    where: {
      id: parseInt(id),
    },
    include: {
      tutor: {
        select: {
          profile: {
            select: {
              bio: true,
            },
          },
          username: true,
        },
      },
    },
  });
};

module.exports = {
  getSingleAppointmentAsConsultantPrisma,
  getSingleAppointmentAsUserPrisma,
};
