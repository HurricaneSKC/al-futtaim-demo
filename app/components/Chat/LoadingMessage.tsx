import React from "react";
import Image from "next/image";
import chatAvatar from "@/public/chatAvatar.png";

const LoadingMessage = () => {
  return (
    <div className="chat chat-start">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full shadow">
          <Image
            src={chatAvatar}
            alt={"assistant"}
            className="!object-scale-down"
          />
        </div>
      </div>
      <div className="chat-header">assistant</div>
      <div className="chat-bubble">
        <span className="loading loading-dots loading-sm"></span>
      </div>
    </div>
  );
};

export default LoadingMessage;
