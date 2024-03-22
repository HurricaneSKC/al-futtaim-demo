import logo from "@/public/logo.png";
import Image from "next/image";

const Heading = () => {
  return (
    <div className="bg-gradient-to-b from-white px-16 pt-4 pb-16 flex justify-center">
      <Image src={logo} alt="Logo" />
    </div>
  );
};

export default Heading;
