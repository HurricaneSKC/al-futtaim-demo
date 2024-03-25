"use client";

import { HiArrowLeft } from "react-icons/hi2";
import AppLogo from "../ui/Logo";

export default function Header({
  allowBackNavigation = false,
  onClick,
}: {
  allowBackNavigation: boolean;
  onClick?: () => void;
}) {
  return (
    <div className="flex justify-start items-center w-full px-3 py-2 shadow-md">
      {allowBackNavigation && (
        <HiArrowLeft
          className="text-black text-xl cursor-pointer"
          onClick={onClick}
        />
      )}
      <AppLogo className="ml-12" />
    </div>
  );
}
