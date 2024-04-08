"use client";

import { Metadata } from "next";
import Footer from "../components/Footer";
import {
  Dispatch,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import ChatOverlay from "../components/ChatOverlay";
import { DataContext } from "../context/dataContext";

// export const metadata: Metadata = {
//   viewport: {
//     width: "device-width",
//     initialScale: 1,
//     minimumScale: 1,
//     maximumScale: 2,
//     userScalable: false,
//   },
// };

export default function ExploreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { showChatOverlay, setShowChatOverlay } = useContext(DataContext);

  return (
    <main className="flex flex-col justify-start items-center h-full">
      <div className="flex-1">{children}</div>
      <Footer className="self-end" onClick={() => setShowChatOverlay(true)} />
      {showChatOverlay && (
        <ChatOverlay onBackClick={() => setShowChatOverlay(false)} />
      )}
    </main>
  );
}
