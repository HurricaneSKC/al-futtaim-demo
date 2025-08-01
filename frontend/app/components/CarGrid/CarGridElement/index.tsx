"use client";

import { CarItemType } from "@/app/mockdata/cars";
import { cn } from "@/app/utils";
import Image from "next/image";
import React from "react";
import { useGridContext } from "../context";
import Link from "next/link";
import { RxOpenInNewWindow } from "react-icons/rx";
import CarBasicInfo from "./CarBasicInfo";
import CarPrice from "./CarPrice";
import CarPerformance from "./CarPerformance";
import { CustomCar } from "@/app/entities/Cars";

export default function CarGridElement({
  className,
  carItem,
}: {
  className?: string;
  carItem: CustomCar;
}) {
  const { level } = useGridContext();

  return (
    <div
      className={cn(
        "col-span-1 flex justify-center items-center text-center px-3 py-4 border border-slate-200 relative",
        className
      )}
    >
      <div className="flex flex-col justify-center items-center">
        {level === "2" && (
          <div className="absolute top-1 right-2">
            <Link href={`/cars/${carItem.Car_Name}`} className="text-[9px]">
              <RxOpenInNewWindow />
            </Link>
          </div>
        )}
        <CarBasicInfo
          size={carItem.Size}
          brand={carItem.Brand}
          model={carItem.Model}
          className="absolute top-0 left-[3px] animate-slideIn"
        />
        <Image
          src={carItem.image}
          width={200}
          height={200}
          alt={carItem.Car_Name}
        />

        <CarPrice
          price={carItem.Price}
          currency="AED"
          className="absolute bottom-1 left-[3px] animate-slideIn"
        />

        <CarPerformance
          seats={carItem.Size}
          ps={carItem.Horsepower}
          className="absolute bottom-1 right-[3px] animate-slideIn"
        />
      </div>
    </div>
  );
}
