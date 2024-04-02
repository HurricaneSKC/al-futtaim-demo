import { cn } from "@/app/utils";
import React from "react";
import { useGridContext } from "../context";

export default function CarPerformance({
  ps,
  seats,
  className,
}: {
  ps: number;
  seats: string;
  className?: string;
}) {
  const { level } = useGridContext();
  if (level === null) return null;
  if (level === "2")
    return (
      <div className={cn("text-[5px] text-[#8D8D8D]", className)}>
        {ps}ps {seats}
      </div>
    );
  return null;
}
