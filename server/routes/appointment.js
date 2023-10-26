const express = require("express");
const {
  createAppointment,
  getAppointmentAsConsultant,
  getAppointmentAsUser,
  searchAppointmentAsConsultant,
  searchAppointmentAsUser,
} = require("../controllers/appointment");
const router = express.Router();

router.route("/create").post(createAppointment);
router.route("/get-appointment-as-consultant").get(getAppointmentAsConsultant);
router.route("/get-appointment-as-user").get(getAppointmentAsUser);
router.route("/consultant-search").get(searchAppointmentAsConsultant);
router.route("/user-search").get(searchAppointmentAsUser);
module.exports = router;
