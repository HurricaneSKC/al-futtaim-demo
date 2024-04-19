"use client";

import { useDataContext } from "@/app/context/dataContext";
import CarGrid from "../CarGrid";
import CarStack from "../CarStack";

export default function CarDataDisplay({
  threshold = 15,
}: {
  threshold?: number;
}) {
  const { serverData } = useDataContext();

  if (serverData.cars.length <= threshold) {
    return <CarStack />
  }

  return <CarGrid />;
}
