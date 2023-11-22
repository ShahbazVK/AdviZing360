const { consultantProfileTransformer } = require("../consultant/consultant");
const { userTransformer } = require("../user/user");

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
const appointmentwithTutorProfileTransformer = (appointment) => {
  return {
    id: appointment.id,
    tutor: !!appointment.tutor.profile
      ? {
          ...consultantProfileTransformer(appointment.tutor.profile),
          username: appointment.tutor.username,
        }
      : null,
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
const getAppointmentAsConsultantTransformer = (data) => {
  // console.log(data);
  const appointmentsAsTutor = [];
  data.appointmentsAsTutor.forEach((appointment) =>
    appointmentsAsTutor.push(appointmentTransformer(appointment))
  );
  return {
    appointmentsAsTutor,
  };
};

const getAppointmentAsUserTransformer = (data) => {
  const appointmentsAsUser = [];
  data.appointmentsAsUser.forEach((appointment) =>
    appointmentsAsUser.push(appointmentTransformer(appointment))
  );
  return {
    appointmentsAsUser,
  };
};

const getSingleAppointmentAsConsultantTransformer = (data) => {
  const appointment = { ...appointmentTransformer(data) };
  return {
    ...appointment,
  };
};

const getSingleAppointmentAsUserTransformer = (data) => {
  const appointment = { ...appointmentwithTutorProfileTransformer(data) };
  return {
    ...appointment,
  };
};

module.exports = {
  appointmentTransformer,
  getAppointmentAsConsultantTransformer,
  getAppointmentAsUserTransformer,
  getSingleAppointmentAsConsultantTransformer,
  getSingleAppointmentAsUserTransformer,
  appointmentwithTutorProfileTransformer,
};
