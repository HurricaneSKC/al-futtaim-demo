"use client";

import { cn } from "@/app/utils";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { useGridContext } from "../CarGrid/context";

export default function PinchGrid({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const { setLevel } = useGridContext();

  const setLevelHandler = (scale: number) => {
    if (scale >= 1.5 && scale < 2) {
      setLevel('1')
    }

    else if (scale >= 3 && scale <= 4) {
      setLevel('2');
    }

    if (scale <= 1) {
      setLevel(null);
    }
  }
  return (
    <TransformWrapper maxScale={4} minScale={1} disablePadding onWheel={(ref) => {
      const scale = ref.state.scale;
      setLevelHandler(scale);
    }} onPinching={(ref) => {
      const scale = ref.state.scale;
      setLevelHandler(scale);
    }}>
      <TransformComponent wrapperClass="overflow-auto max-h-[100%]">
        <div className={cn("grid grid-cols-4 gap-0", className)}>
          {children}
        </div> 
      </TransformComponent>
    </TransformWrapper>
  );
}
