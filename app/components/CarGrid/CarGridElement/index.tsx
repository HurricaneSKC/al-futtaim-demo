"use client";

import { CarItemType } from "@/app/mockdata/cars";
import { cn } from "@/app/utils";
import Image from "next/image";
import React from "react";
import { useGridContext } from "../context";

export default function CarGridElement({
  className,
  carItem,
}: {
  className?: string;
  carItem: CarItemType;
}) {
  const { level } = useGridContext();
  return (
    <div
      className={cn(
        "col-span-1 flex justify-center items-center text-center px-3 py-4 border border-slate-200",
        className
      )}
    >
      <div className="flex flex-col justify-center items-center">
        <p
          className="text-[7px] self-start"
          style={{ opacity: level === "1" || level === "2" ? 1 : 0 }}
        >
          {carItem.brand} from {carItem.price}
        </p>
        <Image
          src={carItem.image}
          width={200}
          height={200}
          alt={carItem.name}
        />
        <p className="text-[7px]" style={{ opacity: level === "2" ? 1 : 0 }}>
          300ps petrol
        </p>
      </div>
    </div>
  );
}
