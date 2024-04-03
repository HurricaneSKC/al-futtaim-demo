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
        <p>
          Give me a second while I check
          <span className="loading loading-bars loading-sm ml-2 relative top-1"></span>
        </p>
      </div>
    </div>
  );
};

export default LoadingMessage;
