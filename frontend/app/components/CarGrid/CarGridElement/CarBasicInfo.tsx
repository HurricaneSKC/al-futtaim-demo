"use client";

import { cn } from "@/app/utils";
import { useGridContext } from "../context";

export default function CarBasicInfo({
  brand,
  size,
  className,
  model,
}: {
  brand: string;
  size: string;
  model: string;
  className?: string;
}) {
  const { level } = useGridContext();
  if (level === null) return null;
  return (
    <div className={cn("flex flex-col justify-start items-start", className)}>
      {(level === "1" || level === "2") && (
        <h1 className="text-[6px] font-semibold">
          {brand}-{model}
        </h1>
      )}
      {level === "2" && (
        <span className="text-[#8D8D8D] text-[4px] animate-slideIn">
          {size}
        </span>
      )}
    </div>
  );
}
