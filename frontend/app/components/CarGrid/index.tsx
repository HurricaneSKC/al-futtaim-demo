"use client";

import { useEffect, useMemo } from "react";
import { useDataContext } from "@/app/context/dataContext";
import { GridAnimationProvider } from "./context";
import getMockedCars from "@/app/mockdata/cars";
import CarGridElement from "./CarGridElement";
import PinchGrid from "../PinchGrid";
import Button from "../ui/Button";

export default function CarGrid() {
  // const carData = useMemo(() => getMockedCars(), []);

  const { serverData } = useDataContext();

  if (!serverData.cars || serverData.cars.length <= 0) {
    return (
      <div className="flex justify-center items-center h-full">
        <h1 className="text-2xl font-semibold text-center">
          Car Suggestions by our AI will be shown here
        </h1>
      </div>
    );
  }
  const dups = serverData.cars.concat(serverData.cars.slice());
  return (
    <GridAnimationProvider>
      <PinchGrid className="relative">
        {dups.map((carItem, idx) => (
          <CarGridElement key={idx} carItem={carItem} />
        ))}
      </PinchGrid>
    </GridAnimationProvider>
  );
}
