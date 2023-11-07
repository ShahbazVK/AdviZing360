import React from "react";
import ShowConsultants from "../../components/consultants/ShowConsultants";
import ShowAppointments from "../../components/appointment/user/ShowAppointments";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <ShowAppointments />
      <ShowConsultants />
    </div>
  );
};

export default HomePage;
