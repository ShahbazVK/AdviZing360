const express = require("express");
const {
  createConsultantProfile,
  consultantTimings,
  getAllConsultants,
} = require("../controllers/consultantProfile");
const router = express.Router();

router.route("/consultant-profile").post(createConsultantProfile);
router.route("/consultant-timings").get(consultantTimings);
router.route("/show-consultants").get(getAllConsultants);
module.exports = router;
