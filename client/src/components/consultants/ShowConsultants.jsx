import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SHOW_ALL_CONSULTANTS } from "../../config/ApiRoutes";
import Get from "../../utils/Get";

const ShowConsultants = () => {
  const [Consultants, setConsultants] = useState([]);
  const navigate = useNavigate();
  const consultantProfile = (id) => {
    navigate(`/create-appointment?id=${id}`);
  };
  const fetchConsultants = async () => {
    const resp = await Get(SHOW_ALL_CONSULTANTS);
    setConsultants(resp.data);
  };

  useEffect(() => {
    fetchConsultants();
  }, []);
  return (
    <div>
      <h2>All Consultants</h2>
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

export default ShowConsultants;
