import React from "react";
import ChatMessage from "./ChatMessage";
import Message from "@/app/entities/Message";

interface Props {
  messages: Message[];
}

const ChatList = ({ messages }: Props) => {
  return (
    <div className="chat-messages py-2">
      {messages.reverse().map(({ id, role, content }) => (
        <ChatMessage id={id} key={id} role={role} content={content} />
      ))}
    </div>
  );
};

export default ChatList;
