import axios from "../config/APIBaseURL";
import AllErrors from "../errors";
export default async (url) => {
  return axios
    .get(url, { withCredentials: true })
    .then((resp) => resp)
    .catch((err) => {
      // console.log(err);
      AllErrors(err);
    });
};
