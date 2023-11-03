import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SEARCH_CONSULTANT_BY_ID } from "../config/ApiRoutes";
import Get from "../utils/Get";
import SchedulingTime from "../components/appointment/SchedulingTime";

const CreateAppointment = () => {
  const [searchParams] = useSearchParams();
  const [consultant, setconsultant] = useState({});
  const [loading, setloading] = useState(true);

  const id = searchParams.get("id");
  const searchConsultantById = async (id) => {
    const resp = await Get(SEARCH_CONSULTANT_BY_ID(id));
    setconsultant(resp.data);
    setloading(false);
  };
  useEffect(() => {
    searchConsultantById(id);
  }, []);

  return (
    <div>
      {!loading ? (
        <div>
          <p>Username: {consultant.tutor.username}</p>
          <p>About: {consultant.bio}</p>
          <p>Hourly Rate: {consultant.hourlyRate}</p>
          <p>Services: {consultant.keywords[0].keyword.keyword}</p>
          <SchedulingTime availability={consultant.availability} />
        </div>
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  );
};

export default CreateAppointment;
