"use client";

import LetsTalkIcoBtn from "@/public/misc/ico-letstalk.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ChatOverlay from "./components/ChatOverlay";
import Heading from "./components/Heading/Heading";
import Button from "./components/ui/Button";
import AiLogo from "./components/ui/AiLogo";

export default function Home() {
  const [showChatOverlay, setShowChatOverlay] = useState(false);

  return (
    <main className="h-full w-full relative">
      {/* <div className="bg-white h-full w-full">
          <MockCarGrid />
        </div> */}
      <div className="absolute h-full w-full top-0 bg-slate-100/90">
        {/* white gradient overlay */}
        <div className="absolute w-full h-[60%] bg-gradient-to-b from-white" />
        {/* landing screen content */}
        <div className="h-full w-full flex flex-col justify-between relative">
          <Heading />
          <div className="flex flex-col gap-4 w-full px-6 pb-3">
            <Button
              onClick={() => {
                setShowChatOverlay(true);
              }}
            >
              <AiLogo />
              <p className="mr-10">Let&apos;s Chat</p>
            </Button>
            <Link href="/explore" className="w-full">
              <button className="btn btn-secondary w-full">Explore</button>
            </Link>
          </div>
        </div>
      </div>
      {/* chat overlay */}
      {showChatOverlay && (
        <ChatOverlay onBackClick={() => setShowChatOverlay(false)} />
      )}
    </main>
  );
}
