import React, { useEffect, useState } from "react";
import Get from "../utils/Get";
import { SHOW_ALL_CONSULTANTS } from "../config/ApiRoutes";
import ShowConsultants from "../components/consultants/ShowConsultants";
import ShowAppointments from "../components/appointment/ShowAppointments";

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
