import React, { useContext, useEffect, useState } from "react";
import Get from "../../utils/Get";
import { GET_CONSULTANT_BY_ID } from "../../config/ApiRoutes";
import { UserContext } from "../../context/UserContext";
import CreateProfile from "../../components/consultants/CreateProfile";
import ShowOwnProfile from "../../components/appointment/consultant/ShowOwnProfile";

const TheProfile = () => {
  const { User } = useContext(UserContext);
  const [profile, setprofile] = useState(null);
  const [loading, setloading] = useState(true);
  const getConsultantById = async () => {
    const resp = await Get(GET_CONSULTANT_BY_ID(User.id));
    setprofile(resp.data);
    setloading(false);
  };
  useEffect(() => {
    User?.id && getConsultantById();
  }, [User]);

  if (loading) return <h3>Loadingoiii...</h3>;
  else if (!loading && profile) return <ShowOwnProfile profile={profile} />;
  else if (!loading && !profile) return <CreateProfile />;
};

export default TheProfile;
