import React from "react";
import Image from "next/image";
import Message from "../../entities/Message";
import chatAvatar from "@/public/chatAvatar.png";
import { RxAvatar } from "react-icons/rx";
import car from "@/public/70c55411dde24c75a6268cc60823bfaa.jpg";
import Link from "next/link";

const ChatMessage = ({ id, role, content, image }: Message) => {
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
          <Link href={"/explore"} className="btn my-1">
            Would you like to see the options?
          </Link>
        )}
      </div>
    </div>
  );
};

export default ChatMessage;
