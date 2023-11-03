const createConsultantProfilePrisma = require("../DB/consultantProfile/createProfile");
const getAllConsultantsPrisma = require("../DB/getGeneralList/getAllConsultants");
const asyncWrapper = require("../middlewares/async");
const getConsultantPrisma = require("../DB/consultantProfile/getProfile");
const searchKeywordPrisma = require("../DB/consultantProfile/searchKeyword");
const getConsultantByKeywordPrisma = require("../DB/consultantProfile/getConsultantByKeyword");
const { daysOfWeek, isCustomTimeFormat } = require("../utils/date");
const { BadRequestError } = require("../errors");
const createConsultantProfile = asyncWrapper(async (req, res) => {
  let startTime = "";
  let endTime = "";
  const { subject, availability, ...data } = req.body;
  daysOfWeek.forEach((day, index) => {
    if (!availability[day]) {
      availability[day] = null;
    } else {
      startTime = isCustomTimeFormat(availability[day].startTime);
      endTime = isCustomTimeFormat(availability[day].endTime);
      if (!startTime || !endTime) {
        throw new BadRequestError("time must be in following format HH:MM:SS");
      }
    }
  });
  data.availability = availability;

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

const getConsultantByKeyword = asyncWrapper(async (req, res) => {
  const { search } = req.query;

  const consultants = await getConsultantByKeywordPrisma(search);
  res.json(consultants);
});

module.exports = {
  createConsultantProfile,
  getConsultant,
  getAllConsultants,
  searchKeyword,
  getConsultantByKeyword,
};
