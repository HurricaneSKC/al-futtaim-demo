import React from "react";
import Message from "../../entities/Message";

const ChatMessage = ({ id, role, content }: Message) => {
  return (
    <div className={`chat ${role === "user" ? "chat-end" : "chat-start"}`}>
      <div className="chat-header">{role}</div>
      <div
        className={`chat-bubble ${
          role === "user" ? "chat-bubble-primary" : "chat-bubble"
        }`}
      >
        {content}
      </div>
    </div>
  );
};

export default ChatMessage;
