"use client";

import ChatBot from "../Chat/ChatBot";
import Header from "../Header";
import AppLogo from "../ui/Logo";

export default function ChatOverlay({
  onBackClick,
}: {
  onBackClick: () => void;
}) {
  return (
    <div className="absolute w-full h-full inset-0 bg-white animate-slideIn">
      <div className="flex flex-col justify-center items-center h-full relative">
        <ChatBot />
      </div>
      <Header
        allowBackNavigation={true}
        onClick={onBackClick}
        backIconClassname="flex-1"
        className="bg-white shadow-md justify-between items-center"
      >
        <AppLogo/>
        <div aria-label="empty" className="flex-1"></div>
      </Header>
    </div>
  );
}
