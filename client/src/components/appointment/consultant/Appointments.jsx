import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Get from "../../../utils/Get";
import { GET_APPOINTMENTS_AS_CONSULTANT } from "../../../config/ApiRoutes";
import {
  GetDateInFormat,
  getColonTimeFromDateWithoutSeconds,
} from "../../../utils/DateFunctions";

const Appointments = () => {
  const navigate = useNavigate();
  const [appointments, setappointments] = useState([]);
  const [loading, setloading] = useState(true);
  const fetchBookedAppointments = async () => {
    const resp = await Get(GET_APPOINTMENTS_AS_CONSULTANT);
    setappointments(resp.data.appointmentsAsTutor);
    setloading(false);
  };
  const goToAppointment = (id) => {
    navigate(`/consultant/appointment?id=${id}`);
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
            <div
              onClick={() => goToAppointment(appointment.id)}
              key={key}
              className="appointment-card"
            >
              <p>User name: {appointment.user.username}</p>
              <p>Status: {appointment.status}</p>
              <p>Price: {appointment.price}</p>
              <p>Subject: {appointment.subject}</p>
              <GetDateInFormat date={appointment.startTime} />
              <p>
                Start Time:{" "}
                {getColonTimeFromDateWithoutSeconds(appointment.startTime)}
              </p>
              <p>
                End Time:{" "}
                {getColonTimeFromDateWithoutSeconds(appointment.endTime)}
              </p>
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
