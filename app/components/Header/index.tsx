"use client";

import { HiArrowLeft } from "react-icons/hi2";
import AppLogo from "../ui/Logo";
import { useRouter } from "next/navigation";
import { cn } from "@/app/utils";
import HeaderIcon from "./HeaderIcon";

export default function Header({
  allowBackNavigation = false,
  onClick,
  backTo,
  className,
  children,
}: {
  allowBackNavigation: boolean;
  onClick?: () => void;
  backTo: string;
  className?: string;
  children?: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <div
      className={cn(
        "flex justify-start items-center w-full px-3 py-2 absolute bg-transparent z-10",
        className
      )}
    >
      {allowBackNavigation && (
        <HeaderIcon
          className="mr-auto"
          icon={
            <HiArrowLeft
              className="text-white text-xl cursor-pointer"
              onClick={() => router.push(backTo)}
            />
          }
        />
        // <div className="bg-black/50 p-2 rounded-full mr-auto">

        // </div>
      )}
      {children}
    </div>
    // <div className="w-full relative p-4 bg-transparent">
    // {/* <AppLogo className="mx-auto" /> */}
    // </div>
  );
}
