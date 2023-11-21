import React, { useState } from "react";
import GetChat from "./GetChat";
import SendChat from "./SendChat";

const Chat = ({ socket, recipientId, recipientName }) => {
  return (
    <div>
      <h2>Chat</h2>
      <GetChat
        socket={socket}
        recipientId={recipientId}
        recipientName={recipientName}
      />
      <SendChat socket={socket} recipientId={recipientId} />
    </div>
  );
};

export default Chat;
