import { cn } from "@/app/utils";
import { VehicleKeyInfoProps } from "./types";

export default function VehicleKeyInfo({
  infoData,
  className
}: {
  infoData: VehicleKeyInfoProps;
  className?: string
}) {
  return (
    <div className={cn("grid grid-cols-3 gap-4", className)}>
      {infoData.map((item, i) => (
        <div
          key={`info-${i}`}
          className="bg-[#F1F1F1] col-span-1 shadow px-2 py-4 flex flex-col justify-start items-center gap-4"
        >
          <span className="text-[#8D8D8D] text-xs">{item.title}</span>
          <h1 className="text-black text-xl font-semibold">{item.value}</h1>
        </div>
      ))}
    </div>
  );
}
