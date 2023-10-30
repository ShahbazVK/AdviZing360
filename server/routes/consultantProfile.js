const express = require("express");
const {
  createConsultantProfile,
  getAllConsultants,
  getConsultant,
  searchKeyword,
} = require("../controllers/consultantProfile");
const router = express.Router();

router.route("/consultant-profile").post(createConsultantProfile);
router.route("/get-consultant").get(getConsultant);
router.route("/show-consultants").get(getAllConsultants);
router.route("/search-consultant-by-keywords").get(searchKeyword);
module.exports = router;
