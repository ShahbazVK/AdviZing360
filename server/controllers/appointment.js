const createAppointmentPrisma = require("../DB/appointment/create");
const getAppointmentAsConsultantPrisma = require("../DB/appointment/getAppointmentsAsConsultant");
const getAppointmentAsUserPrisma = require("../DB/appointment/getAppointmentsAsUser");
const {
  getSingleAppointmentAsConsultantPrisma,
  getSingleAppointmentAsUserPrisma,
} = require("../DB/appointment/getSingleAppointment");
const {
  searchAppointmentAsUserPrisma,
  searchAppointmentAsConsultantPrisma,
} = require("../DB/appointment/searchAppointments");
const asyncWrapper = require("../middlewares/async");

const createAppointment = asyncWrapper(async (req, res) => {
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

const searchAppointmentAsUser = asyncWrapper(async (req, res) => {
  const search = req.query.search;
  const filteredAppointments = await searchAppointmentAsUserPrisma(
    req.user.id,
    search
  );
  res.json(filteredAppointments);
});
const searchAppointmentAsConsultant = asyncWrapper(async (req, res) => {
  const search = req.query.search;
  const filteredAppointments = await searchAppointmentAsConsultantPrisma(
    req.user.id,
    search
  );
  res.json(filteredAppointments);
});

const getSingleAppointmentAsConsultant = asyncWrapper(async (req, res) => {
  const appointmentId = req.query.id;
  const appointment = await getSingleAppointmentAsConsultantPrisma(
    appointmentId
  );
  res.json(appointment);
});

const getSingleAppointmentAsUser = asyncWrapper(async (req, res) => {
  const appointmentId = req.query.id;
  const appointment = await getSingleAppointmentAsUserPrisma(appointmentId);
  res.json(appointment);
});

module.exports = {
  createAppointment,
  getAppointmentAsConsultant,
  getAppointmentAsUser,
  searchAppointmentAsUser,
  searchAppointmentAsConsultant,
  getSingleAppointmentAsConsultant,
  getSingleAppointmentAsUser,
};
