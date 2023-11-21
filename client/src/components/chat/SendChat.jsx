import React, { useState } from "react";
import UITextarea from "../UI/UITextarea";
import UIButton from "../UI/UIButton";
import Post from "../../utils/Post";
import { SEND_CHAT_MESSAGE } from "../../config/ApiRoutes";

const SendChat = ({ socket, recipientId }) => {
  const [message, setmessage] = useState("");
  const sendMessage = async () => {
    socket.emit("private_message", { message, recipientId });
    const resp = await Post(SEND_CHAT_MESSAGE, { message, recipientId });
    setmessage("");
  };
  return (
    <div>
      <UITextarea value={message} setValue={setmessage} />
      <UIButton title={"Send Message"} onclickFunc={sendMessage} />
    </div>
  );
};

export default SendChat;
