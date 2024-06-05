import Header from "../components/Header";
import AppLogo from "../components/ui/Logo";
import CarDataDisplay from "../components/CarDataDisplay";

export default function ExplorePage() {
  return (
    <div className="bg-white h-full w-full relative">
      <Header
        allowBackNavigation={true}
        backTo="/"
        className="static w-full shadow-md flex justify-between items-center bg-white"
        backIconClassname="flex-1"
      >
        <AppLogo />
        <div className="flex-1"></div>
      </Header>

      {/* <CarGrid /> */}
      <CarDataDisplay />
    </div>
  );
}
