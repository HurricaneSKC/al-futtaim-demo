import Image from "next/image";
import Link from "next/link";
import ReactLogo from "./assests/Logo.svg";

export default function Home() {
  return (
    <main className="h-full w-full relative">
      <div className="bg-white h-full w-full">Grid Layer Component</div>
      <div className="absolute h-full w-full top-0">Chat overlay</div>
    </main>
  );
}
