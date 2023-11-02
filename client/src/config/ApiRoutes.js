export const REGISTER = "/auth/register";
export const LOGIN = "/auth/login";
export const LOGOUT = "/auth/logout";
export const SHOW_ALL_CONSULTANTS = "/profile/show-consultants";
export const SEARCH_CONSULTANT_BY_ID = (id) =>
  `/profile/get-consultant?id=${id}`;
