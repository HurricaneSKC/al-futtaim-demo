import React from "react";
import Image from "next/image";
import car from "@/public/70c55411dde24c75a6268cc60823bfaa.jpg";

const MockCars = () => {
  return (
    <div className="p-2">
      <Image src={car} alt="car" />
    </div>
  );
};

export default MockCars;
