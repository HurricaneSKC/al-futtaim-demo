import React from "react";

interface Props {
  text?: string;
}

const ChatResponse = ({ text }: Props) => {
  return (
    <div className="chat chat-start">
      <div className="chat-bubble chat-bubble-primary">{text}</div>
    </div>
  );
};

export default ChatResponse;
