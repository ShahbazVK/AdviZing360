import React, { useEffect, useState } from "react";
import Get from "../../utils/Get";
import { GET_APPOINTMENT_BY_ID_AS_USER } from "../../config/ApiRoutes";
import { useSearchParams } from "react-router-dom";

const AppointmentDetail = () => {
  const [searchParams] = useSearchParams();
  const [appointment, setappointment] = useState({});
  const id = searchParams.get("id");
  const fetchAppointment = async (id) => {
    const resp = await Get(GET_APPOINTMENT_BY_ID_AS_USER(id));
    setappointment(resp.data);
  };
  useEffect(() => {
    fetchAppointment(id);
    // console.log(appointment);
  }, []);

  return (
    // <h1>Hi</h1>
    <div>
      {appointment ? (
        <div>
          <p>Consultant name: {appointment?.tutor?.username}</p>
          <p>Bio: {appointment?.tutor?.profile.bio}</p>
          <p>Start Time: {appointment.startTime}</p>
          <p>End Time: {appointment.endTime}</p>
          <p>Subject: {appointment.subject}</p>
          <p>Status: {appointment.status}</p>
          <p>Price: {appointment.price}</p>
        </div>
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default AppointmentDetail;
