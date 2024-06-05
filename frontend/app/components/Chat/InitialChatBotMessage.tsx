import React from "react";
import Image from "next/image";
import chatAvatar from "@/public/chatAvatar.png";
import SuggestedUserPrompt from "./SuggestedUserPrompt";
import ChatBotMessageTemplate from "./ChatBotMessageTemplate";

interface Props {
  content: string;
}

const InitialChatBotMessage = ({ content }: Props) => {
  return (
    <ChatBotMessageTemplate>
      {content}
      <div className="py-2">
        <SuggestedUserPrompt promptMessage="I am looking for a family car" />
        <SuggestedUserPrompt promptMessage="What brands do you have?" />
        <SuggestedUserPrompt promptMessage="What are your 3 fastest cars?" />
      </div>
    </ChatBotMessageTemplate>
  );
};

export default InitialChatBotMessage;
