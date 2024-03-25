import Message from "@/app/entities/Message";
import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import LoadingMessage from "./LoadingMessage";

interface Props {
  messages: Message[];
  isLoading: Boolean;
}

const ChatList = ({ messages, isLoading }: Props) => {
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
      {isLoading && <LoadingMessage />}
      <div ref={messagesEndRef}></div>
    </div>
  );
};

export default ChatList;
