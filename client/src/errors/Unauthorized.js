import { delete_cookie } from "sfcookies";

export default () => {
  delete_cookie("User");
  window.location.href = "http://localhost:5173/login";
};
