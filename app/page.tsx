"use client";

import { useState } from "react";
import MockCarGrid from "./components/CarGrid/MockCarGrid";
import ChatBot from "./components/Chat/ChatBot";

export default function Home() {
  const [showChatOverlay, setShowChatOverlay] = useState(false);

  return (
    <main className="h-full w-full relative">
      <div className="bg-white h-full w-full">
        <MockCarGrid />

        <button
          className="btn btn-primary"
          onClick={() => {
            setShowChatOverlay(true);
          }}
        >
          Chat
        </button>
      </div>
      <div className="absolute h-full w-full top-0 bg-slate-100/90">
        <div>
          {/* Logo */}
          {/* Hello Text */}
          {/* chat button */}
          {/* explore button */}
        </div>
        <div className="h-full w-full flex flex-col p-4 justify-between">
          <div>Logo</div>
          {/* Logo */}
          <ChatBot />
        </div>
      </div>
    </main>
  );
}
