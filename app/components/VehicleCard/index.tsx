import { CiShare2 } from "react-icons/ci";
import Header from "../Header";
import HeaderIcon from "../Header/HeaderIcon";
import { Card, CardBody, CardHeader, CardImage, CardTitle } from "../ui/Card";
import { MdFavoriteBorder } from "react-icons/md";


import VehicleKeyInfo from "./VehicleKeyInfo";
import { VehicleKeyInfoProps, VehicleFeatureItemProps } from "./types";
import VehicleGallery from "./VehicleGallery";
import VehicleFeatures from "./VehicleFeatures";

export default function VehicleCard({
  image,
  briefData,
  featureData
}: {
  image: string;
  briefData: VehicleKeyInfoProps;
  featureData: VehicleFeatureItemProps[]
}) {
  return (
    <Card>
      <CardHeader className="relative p-0">
        <CardImage src={image} alt="Shoes" width={414} height={390} />
        <Header
          className="justify-between items-center gap-2"
          allowBackNavigation={true}
          backTo="/explore"
        >
          <HeaderIcon
            icon={<CiShare2 className="text-white text-xl cursor-pointer" />}
          />
          <HeaderIcon
            icon={
              <MdFavoriteBorder className="text-white text-xl cursor-pointer" />
            }
          />
        </Header>
        <CardTitle className="absolute bottom-4 text-4xl text-white left-2 flex flex-col">
            Toyota
            <span className="text-xs text-[#f5e0e0]">From AED 30.0000</span>
        </CardTitle>
      </CardHeader>
      <CardBody className="p-4 bg-white gap-8">
        <VehicleKeyInfo infoData={briefData} />
        <VehicleGallery />
        <VehicleFeatures
          data={featureData}
        />
      </CardBody>
    </Card>
  );
}
