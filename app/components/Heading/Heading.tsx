import AppLogo from "../ui/Logo";
import WelcomeTitle from "./WelcomeTitle";

const Heading = () => {
  return (
    <div className="px-16 pt-4 pb-16 flex flex-col gap-y-10 justify-center">
      <AppLogo />
      <WelcomeTitle name='Amir' />
    </div>
  );
};

export default Heading;
