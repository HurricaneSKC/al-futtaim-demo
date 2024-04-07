import TabbarUI from "@/app/assets/tabbar-bg.svg";
import { cn } from "@/app/utils";

import Image from "next/image";

import { CiHome, CiUser } from "react-icons/ci";
import { IoIosMore } from "react-icons/io";
import { IoCarOutline } from "react-icons/io5";
import AiLogo from "../ui/AiLogo";
import Button from "../ui/Button";

export default function Footer({
  className,
  onClick,
}: {
  className?: string;
  onClick?: () => void;
}) {
  return (
    <div className="absolute left-0 right-0 bottom-0">
      <div className={cn("relative w-full h-[93px] bg-white", className)}>
        <Image src={TabbarUI} alt="Tabbs" fill />

        <div className="flex w-full px-4 justify-between items-center h-full absolute text-[#333]">
          <div className="flex justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
              <CiHome className="text-2xl" />
              Home
            </div>
            <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
              <IoCarOutline className="text-2xl" />
              Explore
            </div>
          </div>
          <div className="flex justify-center items-center gap-10">
            <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
              <CiUser className="text-2xl" />
              User
            </div>
            <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
              <IoIosMore className="text-2xl" />
              More
            </div>
          </div>
        </div>
        <div
          className="absolute cursor-pointer w-16 h-16 bg-[#7480ff] border border-white rounded-full -top-[28px] left-[50%] -translate-x-[50%] flex items-center justify-center hover:shadow-xl shadow-md hover:scale-105 hover:rotate-180 transition-all duration-75 ease-in"
          onClick={onClick}
        >
          <AiLogo />
        </div>
      </div>
    </div>
  );
}
