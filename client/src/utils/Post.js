import axios from "../config/APIBaseURL";
import AllErrors from "../errors";
export default async (url, data) => {
  return axios
    .post(url, data, { withCredentials: true })
    .then((resp) => resp)
    .catch((err) => {
      AllErrors(err);
    });
};
