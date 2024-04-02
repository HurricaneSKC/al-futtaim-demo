import { useMemo } from "react";
import getMockedCars from "@/app/mockdata/cars";
import { GridAnimationProvider } from "./context";
import CarGridElement from "./CarGridElement";
import PinchGrid from "../PinchGrid";

export default function CarGrid() {
  const carData = useMemo(() => getMockedCars(), []);

  return (
    <GridAnimationProvider>
      <PinchGrid>
        {carData.map((carItem) => (
          <CarGridElement key={carItem.id} carItem={carItem} />
        ))}
      </PinchGrid>
    </GridAnimationProvider>
  );
}
