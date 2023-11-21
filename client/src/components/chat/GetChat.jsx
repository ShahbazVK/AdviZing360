import React, { useEffect, useRef, useState } from "react";
import Get from "../../utils/Get";
import { GET_MESSAGES } from "../../config/ApiRoutes";
import { scrollToBottom } from "../../utils/chat";

const GetChat = ({ socket, recipientId, recipientName }) => {
  const chatContainerRef = useRef(null);
  const [allMessages, setallMessages] = useState([]);
  const getPreviousMessages = async () => {
    const resp = await Get(GET_MESSAGES(recipientId));
    resp.data.map((message) => {
      setallMessages((prev) => [
        ...prev,
        {
          message: message.content,
          sentByMe: message.senderId === recipientId ? false : true,
          createdTime: new Date(message.timestamp).toLocaleTimeString(),
          sender: message?.senderId,
        },
      ]);
    });
    scrollToBottom(chatContainerRef);
  };
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setallMessages((prev) => [
        ...prev,
        {
          message: data.message,
          sentByMe: data.sentByMe,
          createdTime: data.createdTime,
          sender: data?.sender,
        },
      ]);
      scrollToBottom(chatContainerRef);
    });
  }, [socket]);
  useEffect(() => {
    getPreviousMessages();
  }, []);

  return (
    <div ref={chatContainerRef}>
      <h3>GetChat</h3>
      {allMessages.map((message, key) => {
        if (message.sentByMe) {
          return (
            <div className="chat-message" key={key}>
              <p>You</p>
              <p>{message.message}</p>
              <p>{message.createdTime}</p>
            </div>
          );
        } else if (!message.sentByMe && message.sender === recipientId) {
          return (
            <div className="chat-message" key={key}>
              <p>{recipientName}</p>
              <p>{message.message}</p>
              <p>{message.createdTime}</p>
            </div>
          );
        }
      })}
    </div>
  );
};

export default GetChat;
