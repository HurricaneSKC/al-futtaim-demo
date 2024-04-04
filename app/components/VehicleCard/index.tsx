import { CiShare2 } from "react-icons/ci";
import Header from "../Header";
import HeaderIcon from "../Header/HeaderIcon";
import {
  Card,
  CardActions,
  CardBody,
  CardHeader,
  CardImage,
  CardTitle,
} from "../ui/Card";
import { MdFavoriteBorder, MdOutlineKeyboardArrowRight } from "react-icons/md";

import VehicleKeyInfo from "./VehicleKeyInfo";
import { VehicleKeyInfoProps, VehicleFeatureItem } from "./types";
import VehicleGallery from "./VehicleGallery";
import VehicleFeatures from "./VehicleFeatures";
import { formatPrice } from "@/app/utils";
import { CustomCar } from "@/app/entities/Cars";

export default function VehicleCard({
  keyInfo,
  featureData,
  carData,
}: {
  keyInfo: VehicleKeyInfoProps;
  featureData: VehicleFeatureItem[];
  carData: CustomCar;
}) {
  return (
    <Card>
      <CardHeader className="relative bg-emerald-400">
        <CardImage src={carData.image} alt="Shoes" width={414} height={390} />
        <Header
          className="justify-between items-center gap-2 pr-4 xs:pl-8"
          allowBackNavigation={true}
          backTo="/explore"
        >
          <div className="flex gap-2">
            <HeaderIcon
              icon={<CiShare2 className="text-white text-xl cursor-pointer" />}
            />
            <HeaderIcon
              icon={
                <MdFavoriteBorder className="text-white text-xl cursor-pointer" />
              }
            />
          </div>
        </Header>
        <CardTitle className="absolute bottom-4 text-4xl text-white left-2 flex flex-col">
          <span className="self-start">{carData.Brand}</span>
          <span className="text-xs text-[#f5e0e0]">
            From {formatPrice(carData.Price)}
          </span>
        </CardTitle>
      </CardHeader>
      <CardBody className="p-4 bg-white gap-8">
        <VehicleKeyInfo infoData={keyInfo} />
        <VehicleGallery />
        <VehicleFeatures data={featureData} />
      </CardBody>
      <CardActions>
        <div className="w-full h-[80px] shadow-[0px_-5px_5px_0px_rgba(0,0,0,0.09)] flex justify-between items-center bg-white border-t">
          <div className="text-[#1573F4] font-semibold w-[42%] flex justify-center items-center gap-2">
            <MdOutlineKeyboardArrowRight />
            <button>Test Drive</button>
          </div>
          <div className="bg-[#1573F4] text-white h-full flex-1 font-semibold flex justify-center items-center gap-2">
            <MdOutlineKeyboardArrowRight />
            <button>Request a quote</button>
          </div>
        </div>
      </CardActions>
    </Card>
  );
}
