import axios from "../config/APIBaseURL";
import Unauthorized from "../errors/Unauthorized";
export default async (url) => {
  return axios
    .get(url)
    .then((resp) => resp)
    .catch((err) => {
      if (err.response.status === 401) Unauthorized();
      else alert(err.response.data.msg);
    });
};
