import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  CREATE_APPOINTMENT,
  SEARCH_CONSULTANT_BY_ID,
} from "../../config/ApiRoutes";
import Get from "../../utils/Get";
import SchedulingTime from "../../components/appointment/user/SchedulingTime";
import Subject from "../../components/appointment/user/Subject";
import Post from "../../utils/Post";
import Chat from "../../components/chat";
import GetChat from "../../components/chat/GetChat";

const CreateAppointment = ({ socket }) => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const [consultant, setconsultant] = useState({});
  const [appointment, setappointment] = useState({
    startTime: new Date(),
    endTime: new Date(),
    tutorId: parseInt(id),
    subject: "abcdef",
    price: 0,
  });
  const [loading, setloading] = useState(true);

  const searchConsultantById = async (id) => {
    const resp = await Get(SEARCH_CONSULTANT_BY_ID(id));
    setconsultant(resp.data);
    setloading(false);
    setappointment((prev) => ({ ...prev, price: resp.data.hourlyRate }));
  };
  const createAppointment = async () => {
    const appointmentRequest = await Post(CREATE_APPOINTMENT, appointment);
    console.log(appointmentRequest);
  };
  useEffect(() => {
    searchConsultantById(id);
  }, []);

  return (
    <div>
      {!loading ? (
        <div>
          <Chat
            socket={socket}
            recipientId={consultant.tutor.id}
            recipientName={consultant.tutor.username}
          />
          <p>Username: {consultant.tutor.username}</p>
          <p>About: {consultant.bio}</p>
          <p>Hourly Rate: {consultant.hourlyRate}</p>
          <p>Services: {consultant.keywords[0].keyword.keyword}</p>
          <SchedulingTime
            availability={consultant.availability}
            setappointment={setappointment}
            minutesPerSession={consultant.minutesPerSession}
          />
          <Subject setValue={setappointment} />

          <button onClick={createAppointment}>Create appointment</button>
          <br />
          <br />
          <br />
          <br />
        </div>
      ) : (
        <h4>Loading...</h4>
      )}
    </div>
  );
};

export default CreateAppointment;
