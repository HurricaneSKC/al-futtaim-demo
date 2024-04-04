import React from "react";
import LetsTalkIcoBtn from "@/public/misc/ico-letstalk.svg";
import Image from "next/image";

export default function AiLogo() {
  return (
    <Image
      src={LetsTalkIcoBtn}
      alt="Lets Talk Action Icon"
      width={40}
      height={40}
    />
  );
}
