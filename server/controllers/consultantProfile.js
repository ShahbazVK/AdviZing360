const consultantTimingsPrisma = require("../DB/consultantProfile/consultantTimings");
const createConsultantProfilePrisma = require("../DB/consultantProfile/createProfile");
const getAllConsultantsPrisma = require("../DB/getGeneralList/getAllConsultants");
const asyncWrapper = require("../middlewares/async");
const createConsultantProfile = asyncWrapper(async (req, res) => {
  const data = ({ subjects, hourlyRate, bio, availability } = req.body);

  const profile = await createConsultantProfilePrisma({
    ...data,
    tutorId: req.user.id,
  });
  res.json(profile);
});

const getAllConsultants = asyncWrapper(async (req, res) => {
  const consultants = await getAllConsultantsPrisma();
  res.json(consultants);
});

const consultantTimings = asyncWrapper(async (req, res) => {
  const { id } = req.query;

  const consultantTimings = await consultantTimingsPrisma(id);
  res.json(consultantTimings);
});

module.exports = {
  createConsultantProfile,
  consultantTimings,
  getAllConsultants,
};
