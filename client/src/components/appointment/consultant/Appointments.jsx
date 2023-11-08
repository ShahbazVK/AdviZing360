import React, { useEffect, useState } from "react";
import Get from "../../../utils/Get";
import { GET_APPOINTMENTS_AS_CONSULTANT } from "../../../config/ApiRoutes";

const Appointments = () => {
  const [appointments, setappointments] = useState([]);
  const [loading, setloading] = useState(true);
  const fetchBookedAppointments = async () => {
    const resp = await Get(GET_APPOINTMENTS_AS_CONSULTANT);
    setappointments(resp.data.appointmentsAsTutor);
    setloading(false);
  };
  useEffect(() => {
    fetchBookedAppointments();
  }, []);

  return (
    <div>
      <h3>Appointments</h3>
      {!loading ? (
        appointments.map((appointment, key) => {
          return (
            <div key={key}>
              <p>User name: {appointment.user.username}</p>
              <p>Status: {appointment.status}</p>
              <p>Price: {appointment.price}</p>
              <p>Start Time: {appointment.startTime}</p>
              <p>End Time: {appointment.endTime}</p>
              <p>Subject: {appointment.subject}</p>
            </div>
          );
        })
      ) : (
        <h3>"Loading..."</h3>
      )}
    </div>
  );
};

export default Appointments;
