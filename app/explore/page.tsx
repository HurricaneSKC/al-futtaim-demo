import CarGrid from "@/app/components/CarGrid";
import Header from "@/app/components/Header";

export default function ExplorePage() {
  
  return (
    <div className="bg-white h-full w-full relative">
      <Header allowBackNavigation={true} backTo='/' />
      <CarGrid />
    </div>
  );
}
