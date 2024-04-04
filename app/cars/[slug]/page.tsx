'use client';

interface Props {
  params: { slug: string };
}

import { MdOutlineSurroundSound } from "react-icons/md";
import { GiSteeringWheel } from "react-icons/gi";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { FaBoxesPacking } from "react-icons/fa6";

// import CarProfileImage from "@/app/assets/car-profile/image.svg";

import VehicleCard from "@/app/components/VehicleCard";
import getMockedCars from "@/app/mockdata/cars";
import { notFound } from "next/navigation";
import { useDataContext } from "@/app/context/dataContext";

export default function CarDetailPage({ params: { slug } }: Props) {
  // const carData = getMockedCars();
  // const found = carData.find(item => item.slug === slug);
  const { serverData } = useDataContext();
  const found = serverData.cars.find(item => item.Car_Name === slug);
  if (!found) {
    notFound();
  }
  // one can do data fetching instead of hardcoding the values;
  return (
    <VehicleCard
      carData={found}
      keyInfo={[
        { title: "Electric Range", value: "480km" },
        { title: "Chargin Time", value: "3 hour" },
        { title: "Acceleration", value: "3.6s" },
      ]}
      featureData={[
        {
          id: "1",
          icon: MdOutlineSurroundSound,
          title: "Soundbar",
          description:
            "The stylish soundbar is the centrepiece of a high-performance audio system.",
        },
        {
          id: "2",
          icon: GiSteeringWheel,
          title: "Park Pilot Assist",
          description:
            "The EX30 can park itself, steering, accelerating and braking for you.",
        },
        {
          id: "3",
          icon: BsFillBrightnessHighFill,
          title: "Ambiencee Themes",
          description:
            "Five illumination and sound themes conjure the ambience of Scandinavia.",
        },
        {
          id: "4",
          icon: FaBoxesPacking,
          title: "Smart Storage Solutions",
          description:
            "Practical storage solutions and a versatile boot add convenience and comfort.",
        },
      ]}
    />
  );
}
