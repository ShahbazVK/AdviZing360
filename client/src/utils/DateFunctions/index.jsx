function getNextDateOfWeek(day) {
  const daysOfWeek = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];
  const today = new Date();
  const targetDayIndex = daysOfWeek.indexOf(day);

  if (targetDayIndex === -1) {
    return "Invalid day of the week";
  }

  const currentDayIndex = today.getDay();
  const daysUntilTarget = (targetDayIndex - currentDayIndex + 7) % 7;
  const nextDate = new Date(today);
  nextDate.setDate(today.getDate() + daysUntilTarget);

  return nextDate;
}

// date in this format 6 December, 2023
export const GetNextDateOfWeekInFormat = ({ day }) => {
  return (
    <div>
      {getNextDateOfWeek(day).getDate().toString()}{" "}
      {getNextDateOfWeek(day).toLocaleString("default", {
        month: "long",
      })}
      ,{/* {(getNextDateOfWeek(day).getMonth() + 1).toString()}- */}{" "}
      {getNextDateOfWeek(day).getFullYear().toString()}
    </div>
  );
};

// date in this format 2 December, 2023
export const GetDateInFormat = ({ date }) => {
  date = new Date(date);
  return (
    <p>
      {date.getDate().toString()}{" "}
      {date.toLocaleString("default", {
        month: "long",
      })}
      , {date.getFullYear().toString()}
    </p>
  );
};

export const extractFromDate = (d) => {
  d = new Date(d);
  const year = d.getFullYear();
  const month = d.getMonth();
  const date = d.getDate();
  const day = d.getDay();
  const hour = d.getHours();
  const minute = d.getMinutes();
  const second = d.getSeconds();
  return { year, month, date, day, hour, minute, second };
};

export const getColonTimeFromDateWithSeconds = (date) => {
  //10:00:00
  return new Date(date).toTimeString().slice(0, 8);
};

export const getColonTimeFromDateWithoutSeconds = (date) => {
  //10:00
  return new Date(date).toTimeString().slice(0, 5);
};

export const DurationTimingsFormat = ({ startTime, endTime, callbackFunc }) => {
  //10:00:00 - 14:00:00
  startTime = getColonTimeFromDateWithoutSeconds(startTime);
  endTime = getColonTimeFromDateWithoutSeconds(endTime);
  return (
    <p onClick={callbackFunc}>
      {startTime} - {endTime}
    </p>
  );
};

// 10:00:50 ---> nextdate_timedate
export const customColonTimeTo_NextDate_TimeDateConversion = (time, day) => {
  const nextDate = getNextDateOfWeek(day);
  const timeArr = time.split(":");
  const extract = extractFromDate(nextDate);
  nextDate.setFullYear(extract.year, extract.month, extract.date);
  nextDate.setHours(
    parseInt(timeArr[0]),
    parseInt(timeArr[1]),
    parseInt(timeArr[2])
  );
  return nextDate;
};
