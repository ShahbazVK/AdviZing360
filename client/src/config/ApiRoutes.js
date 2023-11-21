export const REGISTER = "/auth/register";
export const LOGIN = "/auth/login";
export const LOGOUT = "/auth/logout";
export const SHOW_ALL_CONSULTANTS = "/profile/show-consultants";
export const SEARCH_CONSULTANT_BY_ID = (id) =>
  `/profile/get-consultant?id=${id}`;
export const CREATE_APPOINTMENT = "/appointment/create";
export const GET_APPOINTMENTS_AS_USER = "/appointment/get-appointment-as-user";
export const GET_APPOINTMENT_BY_ID_AS_USER = (id) =>
  `/appointment/get-single-appointment-as-user?id=${id}`;
export const GET_APPOINTMENTS_AS_CONSULTANT =
  "/appointment/get-appointment-as-consultant";
export const GET_CONSULTANT_BY_ID = (id) => `/profile/get-consultant?id=${id}`;
export const CREATE_CONSULTANT_PROFILE = "/profile/consultant-profile";
export const GET_APPOINTMENT_AS_CONSULTANT = (id) =>
  `/appointment/get-single-appointment-as-consultant?id=${id}`;
export const SEND_CHAT_MESSAGE = "/chat/send-message";
export const GET_MESSAGES = (recipientId) =>
  `/chat/get-messages?recipientId=${recipientId}`;
