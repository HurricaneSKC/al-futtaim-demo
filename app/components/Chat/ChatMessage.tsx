import React, { useContext } from "react";
import Image from "next/image";
import Message from "../../entities/Message";
import chatAvatar from "@/public/chatAvatar.png";
import { RxAvatar } from "react-icons/rx";
import { DataContext } from "@/app/context/dataContext";

const ChatMessage = ({ id, role, content, image }: Message) => {
  const { setShowChatOverlay } = useContext(DataContext);
  return (
    <div className={`chat ${role === "user" ? "chat-end" : "chat-start"}`}>
      <div className="chat-image avatar bg-white rounded-full">
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
        {image && (
          <div className="my-1 rounded-lg overflow-hidden">
            <Image src={image} alt={"car"} />
          </div>
        )}
        {role !== "user" && (
          <button
            onClick={() => setShowChatOverlay(false)}
            className="btn my-2"
          >
            Would you like to see the options?
          </button>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
