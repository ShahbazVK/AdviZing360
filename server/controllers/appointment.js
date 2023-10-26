const createAppointmentPrisma = require("../DB/appointment/create");
const getAppointmentAsConsultantPrisma = require("../DB/appointment/getAppointmentsAsConsultant");
const getAppointmentAsUserPrisma = require("../DB/appointment/getAppointmentsAsUser");
const asyncWrapper = require("../middlewares/async");

const createAppointment = asyncWrapper(async (req, res) => {
  //   console.log(req.body);
  const appointment = await createAppointmentPrisma({
    ...req.body,
    userId: req.user.id,
  });
  res.json(appointment);
});

const getAppointmentAsConsultant = asyncWrapper(async (req, res) => {
  const appointments = await getAppointmentAsConsultantPrisma(req.user.id);
  res.json(appointments);
});

const getAppointmentAsUser = asyncWrapper(async (req, res) => {
  const appointments = await getAppointmentAsUserPrisma(req.user.id);
  res.json(appointments);
});

module.exports = {
  createAppointment,
  getAppointmentAsConsultant,
  getAppointmentAsUser,
};
