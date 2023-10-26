const express = require("express");
const {
  createAppointment,
  getAppointmentAsConsultant,
  getAppointmentAsUser,
} = require("../controllers/appointment");
const router = express.Router();

router.route("/create").post(createAppointment);
router.route("/get-appointment-as-consultant").get(getAppointmentAsConsultant);
router.route("/get-appointment-as-user").get(getAppointmentAsUser);
module.exports = router;
