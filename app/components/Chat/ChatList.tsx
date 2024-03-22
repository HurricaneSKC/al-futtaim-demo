import React from "react";
import ChatResponse from "./ChatResponse";
import ChatMessage from "./ChatMessage";

const ChatList = () => {
  return (
    <div className="chat-messages py-2">
      <ChatResponse />
      <ChatMessage />
      <ChatResponse />
      <ChatMessage />
    </div>
  );
};

export default ChatList;
