const daysOfWeek = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
];

const isCustomTimeFormat = (time) => {
  const timeParts = time.split(":");

  if (timeParts.length === 3) {
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);
    const seconds = parseInt(timeParts[2], 10);
    if (!isNaN(hours) && !isNaN(minutes) && !isNaN(seconds)) {
      return true;
    }
  }
  return false;
};

const durationBetweenTimeInMinutes = (startTime, endTime) => {
  return (new Date(endTime) - new Date(startTime)) / 60000;
};

module.exports = {
  daysOfWeek,
  isCustomTimeFormat,
  durationBetweenTimeInMinutes,
};
