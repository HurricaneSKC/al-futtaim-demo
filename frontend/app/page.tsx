"use client";

import LetsTalkIcoBtn from "@/public/misc/ico-letstalk.svg";
import Image from "next/image";
import Link from "next/link";
import { useContext, useState } from "react";
import ChatOverlay from "./components/ChatOverlay";
import Heading from "./components/Heading/Heading";
import Button from "./components/ui/Button";
import AiLogo from "./components/ui/AiLogo";
import { DataContext } from "./context/dataContext";
import Footer from "./components/Footer";
import car from "@/public/HomepageImage.jpg";
import logoWhite from "@/public/logo-white.png";

export default function Home() {
  const { showChatOverlay, setShowChatOverlay } = useContext(DataContext);

  return (
    <main className="h-full w-full relative">
      <div className="absolute h-full w-full top-0 bg-slate-100/90">
        <div className="h-full w-full flex flex-col justify-between relative">
          <div className="absolute w-full top-16 h-[73%] flex flex-col justify-between items-center">
            <Image src={logoWhite} alt={""} />
            <div className="flex flex-col">
              <Link href="/explore" className="btn btn-primary mb-2">
                Explore our vehicles
              </Link>
              <button
                onClick={() => {
                  setShowChatOverlay(true);
                }}
                className="btn btn-neutral"
              >
                <AiLogo />
                <p className="mr-10">Let&apos;s Chat</p>
              </button>
            </div>
          </div>
          <Image className="object-cover h-full" src={car} alt={""}></Image>
        </div>
      </div>
      {/* chat overlay */}
      {showChatOverlay && (
        <ChatOverlay onBackClick={() => setShowChatOverlay(false)} />
      )}
      <Footer />
    </main>
  );
}
