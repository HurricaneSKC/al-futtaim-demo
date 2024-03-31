"use client";

import { cn } from "@/app/utils";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function PinchGrid({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <TransformWrapper maxScale={4} minScale={1} centerZoomedOut pinch={{ step: 100. }}>
      <TransformComponent>
        <div className={cn("grid grid-cols-4 gap-0", className)}>
          {children}
        </div>
      </TransformComponent>
    </TransformWrapper>
  );
}
