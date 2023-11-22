const { userTransformer } = require("../user/user");

const consultantProfileTransformer = (tutorProfile) => {
  const profile = {
    id: tutorProfile.id,
    tutor: !!tutorProfile.tutor ? userTransformer(tutorProfile.tutor) : null,
    user: !!tutorProfile.user ? userTransformer(tutorProfile.user) : null,
    bio: tutorProfile.bio,
    hourlyRate: tutorProfile.hourlyRate,
    availability: tutorProfile.availability,
    minutesPerSession: tutorProfile.minutesPerSession,
    keywords: tutorProfile.keywords,
  };
  return {
    profile,
  };
};

const manyConsultantsProfileTransformer = (tutorProfiles) => {
  const consultants = [];
  tutorProfiles.forEach((profile) =>
    consultants.push(consultantProfileTransformer(profile))
  );
  return [...consultants];
};

module.exports = {
  consultantProfileTransformer,
  manyConsultantsProfileTransformer,
};
