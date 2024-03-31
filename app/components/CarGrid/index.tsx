import { useMemo } from "react";
import getMockedCars from "@/app/mockdata/cars";
import Image from "next/image";
import Link from "next/link";
import WheelGrid from "../WheelGrid";
import { GridAnimationProvider } from "./context";
import CarGridElement from "./CarGridElement";
import PinchGrid from "../PinchGrid";
// import CarGridElement from "./CarGridElement";

export default function CarGrid() {
  const carData = useMemo(() => getMockedCars(), []);

  return (
    <GridAnimationProvider>
      {/* <WheelGrid> */}
      <PinchGrid className="overflow-auto">
        {carData.map((carItem) => (
          <CarGridElement key={carItem.id} carItem={carItem} />
        ))}
      </PinchGrid>
      {/* </WheelGrid> */}
    </GridAnimationProvider>
  );
}
