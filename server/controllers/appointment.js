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
const BadRequestError = require("../errors/bad-request");
const asyncWrapper = require("../middlewares/async");
const { durationBetweenTimeInMinutes } = require("../utils/date");
const createMeeting = require("../utils/generateZoomMeetingLink");

const createAppointment = asyncWrapper(async (req, res) => {
  const { startTime, endTime, subject } = req.body;
  const meetingDurationInMinutes = durationBetweenTimeInMinutes(
    startTime,
    endTime
  );
  const meetingDetails = await createMeeting(
    subject,
    meetingDurationInMinutes,
    startTime
  );
  const appointment = await createAppointmentPrisma({
    ...req.body,
    meetingLink: meetingDetails.meeting_url,
    userId: req.user.id,
  });
  res.json({ appointment, meetingDetails });
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
    req.user.id,
    appointmentId
  );
  if (!appointment)
    throw new BadRequestError("Such appointment does not exist");
  res.json(appointment);
});

const getSingleAppointmentAsUser = asyncWrapper(async (req, res) => {
  const appointmentId = req.query.id;
  const appointment = await getSingleAppointmentAsUserPrisma(
    req.user.id,
    appointmentId
  );
  if (!appointment)
    throw new BadRequestError("Such appointment does not exist");
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
