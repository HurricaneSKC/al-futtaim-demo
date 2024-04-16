"use client";

import { useDataContext } from "@/app/context/dataContext";
import {
  Card,
  CardBody,
  CardDescription,
  CardHeader,
  CardImage,
  CardTitle,
} from "../ui/Card";
import { cn } from "@/app/utils";
import { CustomCar } from "@/app/entities/Cars";
import Link from "next/link";
import { RxOpenInNewWindow } from "react-icons/rx";
import { MdOutlineRemoveRedEye } from "react-icons/md";

function CarCard({
  carData,
  className,
}: {
  carData: CustomCar;
  className?: string;
}) {
  return (
    <Card
      className={cn(
        "bg-[#f5f5f5] text-[#333] border-lime-600 border rounded",
        className
      )}
    >
      <CardHeader>
        <div className="w-full flex justify-end items-center">
          <Link href={"cars/" + carData.Car_Name}>
            <MdOutlineRemoveRedEye color="#7480ff" size={40}/>
          </Link>
        </div>
        <CardImage src={carData.image} alt={carData.Car_Name} />
        <CardTitle>{carData.Car_Name}</CardTitle>
      </CardHeader>
      <CardBody className="px-2.5 py-2">
        <CardDescription>
          <div className="grid grid-cols-2 gap-2">
            <div className="col-span-1">
              <div className="flex flex-col justify-center items-start w-full h-full gap-4">
                <span>{carData.Engine}</span>
                <span>{carData.Category}</span>
              </div>
            </div>
            <div className="col-span-1">
              <div className="flex flex-col justify-center items-start w-full h-full gap-4">
                <div className="flex justify-end gap-1 w-full">
                  <span>Acceleration in</span>
                  <span>{carData.Acceleration}s</span>
                </div>
                <div className="flex justify-end w-full mt-auto">
                  <span>{carData.Horsepower} HP</span>
                </div>
              </div>
            </div>
          </div>
        </CardDescription>
      </CardBody>
    </Card>
  );
}
export default function CarStack() {
  const { serverData } = useDataContext();

  if (serverData.cars.length <= 0) {
    return (
      <div className="flex justify-center items-center h-full w-full">
        <span className="text-3xl text-gray-600">No Data Found</span>
      </div>
    );
  }

  return (
    <div className="grid grid-flow-col gap-4 px-5 py-3 animate-fadeIn overflow-auto max-h-[calc(100%-155px)]">
      {serverData.cars.map((carItem, idx) => (
        <div key={idx} className="col-span-full">
          <CarCard carData={carItem} />
        </div>
      ))}
    </div>
  );
}
