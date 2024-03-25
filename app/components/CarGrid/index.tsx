import { useMemo } from "react";
import getMockedCars from "@/app/mockdata/cars";
import Image from "next/image";
import Link from "next/link";

const MockCarGrid = () => {
  const carData = useMemo(() => getMockedCars(), []);

  return (
    <div className="grid grid-cols-4 gap-0">
      {carData.map((carItem) => (
        <div
          className="col-span-1 flex justify-center items-center px-3 py-4 border border-slate-200"
          key={carItem.id}
        >
          <Link href="#">
            <Image
              src={carItem.image}
              width={200}
              height={200}
              alt={carItem.name}
            />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default MockCarGrid;
