import React, { useEffect, useState } from "react";
import Get from "../../utils/Get";
import { GET_APPOINTMENT_AS_CONSULTANT } from "../../config/ApiRoutes";
import { useSearchParams } from "react-router-dom";

const AppointmentPage = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [appointmentDetail, setappointmentDetail] = useState({});
  const [loading, setloading] = useState(true);
  const fetchAppointment = async () => {
    const resp = await Get(GET_APPOINTMENT_AS_CONSULTANT(id));
    setappointmentDetail(resp.data);
    setloading(false);
  };
  useEffect(() => {
    fetchAppointment();
  }, []);

  return (
    <div>
      <h2>AppointmentPage</h2>
      {!loading ? (
        <div>
          <p>User name: {appointmentDetail.user.username}</p>
          <p>Status: {appointmentDetail.status}</p>
          <p>Price: {appointmentDetail.price}</p>
          <p>Start Time: {appointmentDetail.startTime}</p>
          <p>End Time: {appointmentDetail.endTime}</p>
          <p>Subject: {appointmentDetail.subject}</p>
        </div>
      ) : (
        <h3>"Loading..."</h3>
      )}
    </div>
  );
};

export default AppointmentPage;
