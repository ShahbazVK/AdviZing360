const prisma = require("..");
const getSingleAppointmentAsConsultantPrisma = (userId, appointmentId) => {
  return prisma.appointment.findUnique({
    where: {
      id: parseInt(appointmentId),
      AND: {
        tutorId: userId,
      },
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

const getSingleAppointmentAsUserPrisma = (userId, appointmentId) => {
  return prisma.appointment.findUnique({
    where: {
      id: parseInt(appointmentId),
      AND: {
        userId,
      },
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
