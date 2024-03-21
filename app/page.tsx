import MockCarGrid from "./components/MockCarGrid";

export default function Home() {
  // const [showChatOverlay, setShowChatOverlay] = useState(false);

  return (
    <main className="h-full w-full relative">
      <div className="bg-white h-full w-full">
        <MockCarGrid />

        {/* <button
          className="btn btn-primary"
          onClick={() => {
            setShowChatOverlay(true);
          }}
        >
          Chat
        </button> */}
      </div>
      <div className="absolute h-full w-full top-0 bg-slate-100/90">
        {/* Logo */}
        {/* Hello Text */}
        {/* chat button */}
        {/* explore button */}
      </div>
    </main>
  );
}
