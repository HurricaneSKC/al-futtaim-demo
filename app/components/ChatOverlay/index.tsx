"use client";

import AppLogo from "../ui/Logo";
import ChatBot from "../Chat/ChatBot";
import { HiArrowLeft } from "react-icons/hi2";

export default function ChatOverlay({ onBackClick }: { onBackClick: () => void }) {
  return (
    <div className="absolute w-full h-full inset-0 bg-white animate-slideIn">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="flex justify-start items-center w-full px-3 py-2 shadow-md">
          <HiArrowLeft className="text-black text-xl cursor-pointer" onClick={onBackClick} />
          <AppLogo className="ml-12" />
        </div>
        <ChatBot />
      </div>
    </div>
  );
}
