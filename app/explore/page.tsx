"use client";

import CarGrid from "@/app/components/CarGrid";
import Header from "@/app/components/Header";
import Button from "../components/ui/Button";
import AiLogo from "../components/ui/AiLogo";
import { useState } from "react";
import ChatOverlay from "../components/ChatOverlay";
import AppLogo from "../components/ui/Logo";

export default function ExplorePage() {
  const [showChatOverlay, setShowChatOverlay] = useState(false);

  return (
    <div className="bg-white h-full w-full relative">
      <Header
        allowBackNavigation={true}
        backTo="/"
        className="static w-full shadow-md flex justify-between items-center"
      >
        <AppLogo />
        <Button onClick={() => setShowChatOverlay(true)} className="w-auto rounded-3xl">
          <AiLogo />
        </Button>
      </Header>
      <CarGrid />
      {showChatOverlay && (
        <ChatOverlay onBackClick={() => setShowChatOverlay(false)} />
      )}
    </div>
  );
}
