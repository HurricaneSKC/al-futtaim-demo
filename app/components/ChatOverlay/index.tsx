"use client";

import ChatBot from "../Chat/ChatBot";
import Header from "../Header";

export default function ChatOverlay({ onBackClick }: { onBackClick: () => void }) {
  return (
    <div className="absolute w-full h-full inset-0 bg-white animate-slideIn">
      <div className="flex flex-col justify-center items-center h-full">
        <Header allowBackNavigation={true} onClick={onBackClick} />
        <ChatBot />
      </div>
    </div>
  );
}
