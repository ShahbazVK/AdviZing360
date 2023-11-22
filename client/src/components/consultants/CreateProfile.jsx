import React, { useEffect, useState } from "react";
import UIInput from "../UI/UIInput";
import UIInputSubmit from "../UI/UIInputSubmit";
import Post from "../../utils/Post";
import { CREATE_CONSULTANT_PROFILE } from "../../config/ApiRoutes";
import UIDayTimeInput from "../UI/UIDayTimeInput";

const CreateProfile = () => {
  const [profile, setprofile] = useState({
    subject: "devops engineer",
    hourlyRate: 0,
    bio: "Hi i am devops engineer",
    minutesPerSession: 0,
    availability: {
      monday: { startTime: "17:17", endTime: "23:34" },
      tuesday: { startTime: "18:17", endTime: "23:35" },
      wednesday: { startTime: "19:17", endTime: "23:14" },
      thursday: { startTime: "17:17", endTime: "23:32" },
      friday: { startTime: "17:17", endTime: "23:34" },
      saturday: { startTime: "21:17", endTime: "23:37" },
      sunday: { startTime: "12:17", endTime: "23:30" },
    },
  });
  const createProfile = async (e) => {
    e.preventDefault();
    const resp = await Post(CREATE_CONSULTANT_PROFILE, profile);
    console.log(resp);
    // console.log(profile);
  };
  useEffect(() => {
    console.log("object");
  }, []);

  return (
    <div>
      <h1>CreateProfile</h1>
      <form>
        <UIInput
          name={"subject"}
          placeholder={"Keyword"}
          value={profile.subject}
          setVar={setprofile}
          type={"text"}
        />
        <UIInput
          name={"hourlyRate"}
          placeholder={"Hourly Rate"}
          value={profile.hourlyRate}
          setVar={setprofile}
          type={"number"}
        />
        <UIInput
          name={"bio"}
          placeholder={"Bio"}
          value={profile.bio}
          setVar={setprofile}
          type={"text"}
        />
        <UIInput
          name={"minutesPerSession"}
          placeholder={"Minutes Per Session"}
          value={profile.minutesPerSession}
          setVar={setprofile}
          type={"number"}
        />
        <br />
        {/* add availability here */}
        <div>
          <label htmlFor="monday">Monday</label>
          <UIDayTimeInput
            name={"monday"}
            type={"text"}
            value1={profile.availability.monday.startTime}
            value2={profile.availability.monday.endTime}
            setVal={setprofile}
          />
          <br />
          <label htmlFor="tuesday">Tuesday</label>
          <UIDayTimeInput
            name={"tuesday"}
            type={"text"}
            value1={profile.availability.tuesday.startTime}
            value2={profile.availability.tuesday.endTime}
            setVal={setprofile}
          />
          <br />
          <label htmlFor="wednesday">Wednesday</label>
          <UIDayTimeInput
            name={"wednesday"}
            type={"text"}
            value1={profile.availability.wednesday.startTime}
            value2={profile.availability.wednesday.endTime}
            setVal={setprofile}
          />
          <br />
          <label htmlFor="thursday">Thursday</label>
          <UIDayTimeInput
            name={"thursday"}
            type={"text"}
            value1={profile.availability.thursday.startTime}
            value2={profile.availability.thursday.endTime}
            setVal={setprofile}
          />
          <br />
          <label htmlFor="friday">Friday</label>
          <UIDayTimeInput
            name={"friday"}
            type={"text"}
            value1={profile.availability.friday.startTime}
            value2={profile.availability.friday.endTime}
            setVal={setprofile}
          />
          <br />
          <label htmlFor="saturday">Saturday</label>
          <UIDayTimeInput
            name={"saturday"}
            type={"text"}
            value1={profile.availability.saturday.startTime}
            value2={profile.availability.saturday.endTime}
            setVal={setprofile}
          />
          <br />
          <label htmlFor="sunday">Sunday</label>
          <UIDayTimeInput
            name={"sunday"}
            type={"text"}
            value1={profile.availability.sunday.startTime}
            value2={profile.availability.sunday.endTime}
            setVal={setprofile}
          />
          <br />
        </div>
        <UIInputSubmit callback={(e) => createProfile(e)} />
      </form>
    </div>
  );
};

export default CreateProfile;
