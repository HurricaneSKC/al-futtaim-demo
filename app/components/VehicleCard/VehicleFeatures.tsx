import React from "react";
import { VehicleFeatureItemProps } from "./types";
import { cn } from "@/app/utils";

function FeatureItem({
  icon: Icon,
  title,
  description,
  className,
}: VehicleFeatureItemProps & { className?: string }) {
  return (
    <div className={cn("flex justify-start items-center gap-4", className)}>
      <div className="bg-[#EFEFEF] rounded p-4"><Icon size={28} color='#333' /></div>
      <div className="flex flex-col gap-1 justify-start items-start">
        <h1 className="font-semibold text-xl text-[#333]">{title}</h1>
        <span className="text-xs text-[#333]">{description}</span>
      </div>
    </div>
  );
}

export default function VehicleFeatures({
  className,
  data,
}: {
  data: VehicleFeatureItemProps[];
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col justify-start items-center w-full gap-3",
        className
      )}
    >
      <h1 className="self-start text-2xl font-semibold !text-[#333]">Features</h1>
      <div className="flex flex-col gap-3">
        {data.map((item) => (
            <FeatureItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
