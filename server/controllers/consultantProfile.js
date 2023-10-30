const createConsultantProfilePrisma = require("../DB/consultantProfile/createProfile");
const getAllConsultantsPrisma = require("../DB/getGeneralList/getAllConsultants");
const asyncWrapper = require("../middlewares/async");
const getConsultantPrisma = require("../DB/consultantProfile/getProfile");
const searchKeywordPrisma = require("../DB/consultantProfile/searchKeyword");
const createConsultantProfile = asyncWrapper(async (req, res) => {
  const { subject, ...data } = req.body;

  const profile = await createConsultantProfilePrisma(
    {
      ...data,
      tutorId: req.user.id,
    },
    subject
  );
  res.json(profile);
});

const getAllConsultants = asyncWrapper(async (req, res) => {
  const consultants = await getAllConsultantsPrisma();
  res.json(consultants);
});

const getConsultant = asyncWrapper(async (req, res) => {
  const { id } = req.query;

  const consultantDetails = await getConsultantPrisma(id);
  res.json(consultantDetails);
});
const searchKeyword = asyncWrapper(async (req, res) => {
  const { search } = req.query;

  const keywords = await searchKeywordPrisma(search);
  res.json(keywords);
});

module.exports = {
  createConsultantProfile,
  getConsultant,
  getAllConsultants,
  searchKeyword,
};
