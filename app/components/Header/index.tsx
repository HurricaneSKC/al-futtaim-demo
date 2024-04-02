"use client";

import { HiArrowLeft } from "react-icons/hi2";
// import AppLogo from "../ui/Logo";
import { useRouter } from "next/navigation";
import { cn } from "@/app/utils";
import HeaderIcon from "./HeaderIcon";

export default function Header({
  allowBackNavigation = false,
  onClick,
  backTo,
  className,
  backIconClassname,
  children,
}: {
  allowBackNavigation: boolean;
  onClick?: () => void;
  backTo?: string;
  className?: string;
  backIconClassname?: string;
  children?: React.ReactNode;
}) {
  const router = useRouter();
  return (
    <div
      className={cn(
        "flex justify-start items-center w-full px-3 py-2 absolute left-0 top-0 bg-transparent z-10",
        className
      )}
    >
      {allowBackNavigation && (
        <div className={backIconClassname}>
          <HeaderIcon
            className="w-[36px] h-[36px] justify-center items-center flex"          
            icon={
              <HiArrowLeft
                className="text-white text-xl cursor-pointer"
                onClick={() => {
                  if (onClick) {
                    onClick()
                    return;
                  }
  
                  if (backTo) {
                    router.push(backTo)
                  }
                }}
              />
            }
          />
        </div>
      )}
      {children}
    </div>
  );
}
