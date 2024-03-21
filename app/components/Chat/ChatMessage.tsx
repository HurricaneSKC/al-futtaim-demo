import React from "react";

interface Props {
  text?: string;
}

const ChatMessage = ({ text }: Props) => {
  return (
    <div className="chat chat-end">
      <div className="chat-bubble chat-bubble-secondary">{text}</div>
    </div>
  );
};

export default ChatMessage;
