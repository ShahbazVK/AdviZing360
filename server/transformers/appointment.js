const userTransformer = require("./user");

const appointmentTransformer = (appointment) => {
  return {
    id: appointment.id,
    tutor: !!appointment.tutor ? userTransformer(appointment.tutor) : null,
    user: !!appointment.user ? userTransformer(appointment.user) : null,
    startTime: appointment.startTime,
    endTime: appointment.endTime,
    status: appointment.status,
    subject: appointment.subject,
    price: appointment.price,
    meetingLink: appointment.meetingLink,
    // reviews: appointment.reviews,
  };
};
module.exports = appointmentTransformer;
