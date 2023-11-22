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
      {Consultants &&
        Consultants.map((consultant, key) => {
          return (
            <div
              className="consultant-card"
              onClick={() => consultantProfile(consultant.profile.tutor.id)}
              key={key}
            >
              {/* {JSON.stringify(consultant.profile)} */}
              <p>Name: {consultant.profile.tutor.username}</p>
              <p>Hourly Rate: {consultant.profile.hourlyRate}</p>
              <p>Bio: {consultant.profile.bio}</p>
              {/* <p>Availability: {consultant.profile.availability}</p> */}
              <hr />
              <br />
            </div>
          );
        })}
    </div>
  );
};

export default ShowConsultants;
