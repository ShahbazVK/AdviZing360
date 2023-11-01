import React, { useEffect, useState } from "react";
import Get from "../utils/Get";
import { SHOW_ALL_CONSULTANTS } from "../config/ApiRoutes";

const HomePage = () => {
  const [Consultants, setConsultants] = useState([]);
  const fetchConsultants = async () => {
    const resp = await Get(SHOW_ALL_CONSULTANTS);
    setConsultants(resp.data);
  };
  const consultantProfile = (id) => {
    console.log(id);
  };
  useEffect(() => {
    fetchConsultants();
  }, []);

  return (
    <div>
      <h1>HomePage</h1>
      {Consultants.map((consultant, key) => {
        return (
          <div
            className="consultant-card"
            onClick={() => consultantProfile(consultant.id)}
            key={key}
          >
            {/* {JSON.stringify(consultant)} */}
            <p>Name: {consultant.tutor.username}</p>
            <p>Hourly Rate: {consultant.hourlyRate}</p>
            <p>Bio: {consultant.bio}</p>
            {/* <p>Availability: {consultant.availability}</p> */}
            <hr />
            <br />
          </div>
        );
      })}
    </div>
  );
};

export default HomePage;
