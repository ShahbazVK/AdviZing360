const prisma = require("..");

const createAppointmentPrisma = async (data) => {
  return prisma.appointment.create({
    data: {
      ...data,
    },
  });
};
module.exports = createAppointmentPrisma;
