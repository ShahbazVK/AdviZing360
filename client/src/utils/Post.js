import Unauthorized from "../errors/Unauthorized";
import axios from "../config/APIBaseURL";
export default async (url, data) => {
  return axios
    .post(url, data)
    .then((resp) => resp)
    .catch((err) => {
      if (err.response.status === 401) Unauthorized();
      else alert(err.response.data.msg);
    });
};
