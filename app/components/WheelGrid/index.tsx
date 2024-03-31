"use client";

import { cn } from "@/app/utils";
import React, { useRef } from "react";
import { createUseGesture, pinchAction } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/web";

export default function WheelGrid({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const useGesture = createUseGesture([pinchAction]);
  const elRef = useRef<HTMLDivElement>(null);
  const [style, api] = useSpring(() => ({
    x: 0,
    y: 0,
    scale: 1,
    rotateZ: 0,
  }));

  useGesture(
    {
      onMouseEnter: (e) => {
        console.log('current', e.event.currentTarget);
      },
      onPinch: ({
        origin: [ox, oy],
        first,
        movement: [ms],
        offset: [s, a],
        memo,
      }) => {
        if (first) {
          const { width, height, x, y } =
            elRef.current!.getBoundingClientRect();
          const tx = ox - (x + width / 2);
          const ty = oy - (y + height / 2);
          memo = [style.x.get(), style.y.get(), tx, ty];
        }
        const x = memo[0] - (ms - 1) * memo[2]
        const y = memo[1] - (ms - 1) * memo[3]
        
        api.start({ to: { x: s <= 1 ? 0 : x, y: s <= 1 ? 0 : y, scale: s, rotateZ: 0 }  })        

        return memo;
      },
    },
    {
      target: elRef,
      pinch: { scaleBounds: { min: 1, max: 4 } },
    }
  );

  return (
    <div className="relative w-full h-full max-h-[90%] overflow-auto">
      <animated.div
        style={style}
        ref={elRef}
        className={cn("grid grid-cols-4 gap-0", className)}
        id="wheel-grid"
      >
        {children}
      </animated.div>
    </div>
  );
}
