"use client";

import { HiArrowLeft } from "react-icons/hi2";
import ChatBot from "../Chat/ChatBot";
import Header from "../Header";
import AppLogo from "../ui/Logo";

interface Props {
  onBackClick: () => void;
}

export default function ChatOverlay({ onBackClick }: Props) {
  return (
    <div className="absolute w-full h-full inset-0 bg-white animate-slideIn z-10">
      <div className="flex flex-col justify-center items-center h-full w-full">
        <div className="flex justify-start items-center w-full px-3 py-2 shadow-md">
          <HiArrowLeft
            className="text-black text-xl cursor-pointer"
            onClick={onBackClick}
          />
          <AppLogo className="ml-12" />
        </div>
        <ChatBot />
      </div>
      <Header
        allowBackNavigation={true}
        onClick={onBackClick}
        backIconClassname="flex-1"
        className="bg-white shadow-md justify-between items-center"
      >
        <AppLogo />
        <div aria-label="empty" className="flex-1"></div>
      </Header>
    </div>
  );
}
