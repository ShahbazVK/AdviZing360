import React from "react";
import {
  DurationTimingsFormat,
  GetNextDateOfWeekInFormat,
} from "../../../utils/DateFunctions";

const ShowRegularTimings = ({ slotTimings, availability, setappointment }) => {
  const selectDateFunc = (timing) => {
    // console.log(timing);
    setappointment((prev) => ({
      ...prev,
      startTime: timing.startTime,
      endTime: timing.endTime,
    }));
  };
  return (
    <div>
      {Object.keys(slotTimings).map((day, key) => {
        return (
          <div key={key}>
            <p>{day} |||</p>
            <GetNextDateOfWeekInFormat day={day} />
            |||
            <div>
              <p>
                Total Time:
                {availability[day].startTime} - {availability[day].endTime}{" "}
              </p>
            </div>
            <p>------------------</p>
            <div>
              {slotTimings[day].map((timing, key) => {
                return (
                  <DurationTimingsFormat
                    key={key}
                    startTime={timing.startTime}
                    endTime={timing.endTime}
                    callbackFunc={() => selectDateFunc(timing)}
                  />
                );
              })}
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default ShowRegularTimings;
