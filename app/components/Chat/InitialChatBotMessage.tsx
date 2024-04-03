import React from "react";
import Image from "next/image";
import Message from "../../entities/Message";
import chatAvatar from "@/public/chatAvatar.png";
import { RxAvatar } from "react-icons/rx";
import car from "@/public/70c55411dde24c75a6268cc60823bfaa.jpg";
import SuggestedUserPrompt from "./SuggestedUserPrompt";

interface Props {
  content: string;
}

const InitialChatBotMessage = ({ content }: Props) => {
  return (
    <div className={`chat chat-start`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full shadow">
          <Image
            src={chatAvatar}
            alt={"assistant"}
            className="!object-scale-down"
          />
        </div>
      </div>
      <div className="chat-header">{"assistant"}</div>
      <div className={`chat-bubble`}>
        {content}
        <div className="py-2"></div>
        <SuggestedUserPrompt promptMessage="I am looking for an SUV" />
        <SuggestedUserPrompt promptMessage="What brands do you have?" />
        <SuggestedUserPrompt promptMessage="I want a fast car" />
      </div>
    </div>
  );
};

export default InitialChatBotMessage;
