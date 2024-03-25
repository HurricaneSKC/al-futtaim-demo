import React from "react";
import Image from "next/image";
import Message from "../../entities/Message";
import chatAvatar from "@/public/chatAvatar.png";
import { RxAvatar } from "react-icons/rx";

const ChatMessage = ({ id, role, content }: Message) => {
  return (
    <div className={`chat ${role === "user" ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full shadow">
          {role !== "user" ? (
            <Image src={chatAvatar} alt={role} className="!object-scale-down" />
          ) : (
            <RxAvatar className="h-10 w-10" />
          )}
        </div>
      </div>
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
