import React, { useEffect, useState } from "react";
import Get from "../../utils/Get";
import { GET_APPOINTMENT_BY_ID_AS_USER } from "../../config/ApiRoutes";
import { useSearchParams } from "react-router-dom";
import {
  GetDateInFormat,
  getColonTimeFromDateWithoutSeconds,
} from "../../utils/DateFunctions";

const AppointmentDetail = () => {
  const [searchParams] = useSearchParams();
  const [appointment, setappointment] = useState(null);
  const id = searchParams.get("id");
  const fetchAppointment = async (id) => {
    const resp = await Get(GET_APPOINTMENT_BY_ID_AS_USER(id));
    setappointment(resp.data);
  };
  useEffect(() => {
    fetchAppointment(id);
    // console.log(appointment);
  }, []);

  if (appointment) {
    return (
      <div>
        <p>Consultant name: {appointment?.tutor?.username}</p>
        <p>Bio: {appointment?.tutor?.profile.bio}</p>
        <GetDateInFormat date={appointment.startTime} />
        <p>
          Start Time:{" "}
          {getColonTimeFromDateWithoutSeconds(appointment.startTime)}
        </p>
        <p>
          End Time: {getColonTimeFromDateWithoutSeconds(appointment.endTime)}
        </p>
        <p>Subject: {appointment.subject}</p>
        <p>Status: {appointment.status}</p>
        <p>Price: {appointment.price}</p>
        <a href={appointment.meetingLink} target="_blank">
          Join meeting
        </a>
      </div>
    );
  } else if (!appointment) return <h3>Loading...</h3>;
};

export default AppointmentDetail;
