import React, { useEffect, useState } from "react";
import Get from "../utils/Get";
import { SHOW_ALL_CONSULTANTS } from "../config/ApiRoutes";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const [Consultants, setConsultants] = useState([]);
  const fetchConsultants = async () => {
    const resp = await Get(SHOW_ALL_CONSULTANTS);
    setConsultants(resp.data);
  };
  const consultantProfile = (id) => {
    navigate(`/create-appointment?id=${id}`);
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
            onClick={() => consultantProfile(consultant.tutor.id)}
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
