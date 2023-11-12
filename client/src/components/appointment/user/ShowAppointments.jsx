import React, { useEffect, useState } from "react";
import Get from "../../../utils/Get";
import { GET_APPOINTMENTS_AS_USER } from "../../../config/ApiRoutes";
import { useNavigate } from "react-router-dom";
import {
  GetDateInFormat,
  getColonTimeFromDateWithoutSeconds,
} from "../../../utils/DateFunctions";

const ShowAppointments = () => {
  const navigate = useNavigate();
  const [appointments, setappointments] = useState([]);
  const fetchAppointmentsAsUser = async () => {
    const UserAppointments = await Get(GET_APPOINTMENTS_AS_USER);
    setappointments(UserAppointments.data.appointmentsAsUser);
  };
  const getAppointmentDetails = (id) => {
    navigate(`/appointment-details?id=${id}`);
  };
  useEffect(() => {
    fetchAppointmentsAsUser();
  }, []);

  return (
    <div>
      <h2>ShowAppointments</h2>
      {appointments ? (
        appointments.map((appointment, key) => {
          return (
            <div
              onClick={() => getAppointmentDetails(appointment.id)}
              className="user-card"
              key={key}
            >
              <p>Consultant name: {appointment.tutor.username}</p>
              {/* image */}
              <p>My subject: {appointment.subject}</p>
              <p>price: {appointment.price}</p>
              <p>status: {appointment.status}</p>
              <GetDateInFormat date={appointment.startTime} />
              <p>
                Start Time:{" "}
                {getColonTimeFromDateWithoutSeconds(appointment.startTime)}
              </p>
              <p>
                End Time:{" "}
                {getColonTimeFromDateWithoutSeconds(appointment.endTime)}
              </p>
              <hr />
            </div>
          );
        })
      ) : (
        <h3>Loading...</h3>
      )}
    </div>
  );
};

export default ShowAppointments;
