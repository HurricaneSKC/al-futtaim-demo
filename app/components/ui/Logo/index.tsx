"use client";

import AlfuttaimLogo from "@/public/logo.png";
import Image from "next/image";

export default function AppLogo({ className }: { className?: string }) {
  return <Image src={AlfuttaimLogo} alt="Logo" className={className} />;
}
