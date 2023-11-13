const tutorTransformer = (tutor) => {
  return {
    id: tutor.id,
    tutor: tutor.tutor,
    bio: tutor.bio,
    hourlyRate: tutor.hourlyRate,
    availability: tutor.availability,
    minutesPerSession: tutor.minutesPerSession,
    keywords: tutor.keywords,
  };
};
module.exports = tutorTransformer;
