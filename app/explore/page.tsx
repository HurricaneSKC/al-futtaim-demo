import CarGrid from "../components/CarGrid";
import Header from "../components/Header";

export default function ExplorePage() {
  
  return (
    <div className="bg-white h-full w-full">
      <Header allowBackNavigation={true} backTo='/' />
      <CarGrid />
    </div>
  );
}
