const prisma = require("..");
const searchAppointmentAsUserPrisma = (id, keyword) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      appointmentsAsUser: {
        where: {
          subject: {
            contains: keyword,
            mode: "insensitive",
          },
        },
        select: {
          startTime: true,
          endTime: true,
          status: true,
          subject: true,
          location: true,
        },
      },
    },
  });
};
const searchAppointmentAsConsultantPrisma = (id, keyword) => {
  return prisma.user.findUnique({
    where: {
      id,
    },
    select: {
      appointmentsAsTutor: {
        where: {
          subject: {
            contains: keyword,
            mode: "insensitive",
          },
        },
        select: {
          startTime: true,
          endTime: true,
          status: true,
          subject: true,
          location: true,
        },
      },
    },
  });
};
module.exports = {
  searchAppointmentAsUserPrisma,
  searchAppointmentAsConsultantPrisma,
};
