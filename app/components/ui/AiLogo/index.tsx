import React from "react";
import LetsTalkIcoBtn from "@/public/misc/ico-letstalk.svg";
import Image from "next/image";

export default function AiLogo({ width, height }: { width?: number, height?: number }) {
  return (
    <Image
      src={LetsTalkIcoBtn}
      alt="Lets Talk Action Icon"
      width={width || 40}
      height={height || 40}
    />
  );
}
