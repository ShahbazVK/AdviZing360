// 1 - instant (a meeting that was created and happened right then)
// 2 - scheduled (a non-recurring meeting that was created but happened at a future date/time)
// 3 - recurring, no fixed time ( a recurring meeting that never ends)
// 8 - recurring, fixed time ( a recurring meeting that stops recurring at some specific time in the future)

const axios = require("axios");
const { BadRequestError } = require("../errors");

const auth_token_url = "https://zoom.us/oauth/token";
const api_base_url = "https://api.zoom.us/v2";

const createMeeting = async (topic, duration, start_time) => {
  const authResponse = await axios.post(
    `${auth_token_url}?grant_type=account_credentials&account_id=${process.env.ZOOM_ACCOUNT_ID}`,
    {},
    {
      auth: {
        username: process.env.ZOOM_USERNAME,
        password: process.env.ZOOM_PASSWORD,
      },
    }
  );

  if (authResponse.status !== 200) {
    throw new BadRequestError("Unable to get access token");
  }

  const access_token = authResponse.data.access_token;

  const headers = {
    Authorization: `Bearer ${access_token}`,
    "Content-Type": "application/json",
  };

  const payload = {
    topic: topic,
    duration: duration,
    start_time: start_time,
    type: 2,
    settings: {
      join_before_host: true,
      waiting_room: false,
    },
  };

  const meetingResponse = await axios.post(
    `${api_base_url}/users/me/meetings`,
    payload,
    { headers }
  );

  if (meetingResponse.status !== 201) {
    throw new BadRequestError("Unable to get access token");
  }

  const response_data = meetingResponse.data;

  const content = {
    meeting_url: response_data.join_url,
    password: response_data.password,
    meetingTime: response_data.start_time,
    purpose: response_data.topic,
    duration: response_data.duration,
    message: "Success",
    status: 1,
  };
  return content;
};
module.exports = createMeeting;
