"use client";

import { HiArrowLeft } from "react-icons/hi2";
import AppLogo from "../ui/Logo";
import { useRouter } from "next/navigation";

export default function Header({
  allowBackNavigation = false,
  onClick,
  backTo,
}: {
  allowBackNavigation: boolean;
  onClick?: () => void;
  backTo: string;
}) {
  const router = useRouter();
  return (
    <div className="flex justify-start items-center w-full px-3 py-2 absolute bg-transparent z-10">
      {allowBackNavigation && (
        <div className="bg-black/50 p-2 rounded-full mr-auto">
          <HiArrowLeft
            className="text-white text-xl cursor-pointer"
            onClick={() => router.push(backTo)}
          />
        </div>
      )}
      <AppLogo className="mx-auto" />
    </div>
  );
}
