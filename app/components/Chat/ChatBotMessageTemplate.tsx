import React from "react";
import Image from "next/image";
import chatAvatar from "@/public/chatAvatar.png";

const ChatBotMessageTemplate = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <div className={`chat chat-start`}>
      <div className="chat-image avatar bg-white rounded-full">
        <div className="w-10 rounded-full shadow">
          <Image
            src={chatAvatar}
            alt={"assistant"}
            className="!object-scale-down"
          />
        </div>
      </div>
      <div className="chat-header">{"assistant"}</div>
      <div className={`chat-bubble`}>{children}</div>
    </div>
  );
};

export default ChatBotMessageTemplate;
