import React, { useEffect, useState } from "react";
import {
  GetNextDateOfWeekInFormat,
  DurationTimingsFormat,
  customColonTimeTo_NextDate_TimeDateConversion,
} from "../../../utils/DateFunctions";
import ShowRegularTimings from "./ShowRegularTimings";

const SchedulingTime = ({ availability, setappointment }) => {
  const [slotTimings, setslotTimings] = useState({});
  const [loading, setloading] = useState(true);

  const SlotsCalculation = (startTime, endTime, day) => {
    startTime = new Date(startTime);
    endTime = new Date(endTime);
    let tempTime = [];
    while (
      startTime <=
      new Date(endTime).setMinutes(new Date(endTime).getMinutes() - 30)
    ) {
      tempTime.push({
        startTime: new Date(startTime),
        endTime: new Date(startTime.setMinutes(startTime.getMinutes() + 30)),
      });
    }
    setslotTimings((prev) => ({ ...prev, [day]: tempTime }));
  };

  useEffect(() => {
    Object.keys(availability).forEach((day, index) => {
      if (availability[day] !== null) {
        SlotsCalculation(
          customColonTimeTo_NextDate_TimeDateConversion(
            availability[day].startTime,
            day
          ),
          customColonTimeTo_NextDate_TimeDateConversion(
            availability[day].endTime,
            day
          ),
          day
        );
      }
    });
    setloading(false);
  }, []);
  return (
    <div>
      {!loading ? (
        <div>
          <h4>Availability</h4>
          <div>
            <ShowRegularTimings
              availability={availability}
              slotTimings={slotTimings}
              setappointment={setappointment}
            />
          </div>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default SchedulingTime;
