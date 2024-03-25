import React, { MutableRefObject, useEffect, useMemo, useRef } from "react";
import ChatMessage from "./ChatMessage";
import Message from "@/app/entities/Message";

interface Props {
  messages: Message[];
}

const ChatList = ({ messages }: Props) => {
  const messagesEndRef = useRef<null | HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-messages py-2 flex-1 overflow-y-auto">
      {messages.map(({ id, role, content }) => (
        <ChatMessage id={id} key={id} role={role} content={content} />
      ))}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatList;
