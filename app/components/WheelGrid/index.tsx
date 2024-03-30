"use client";

import { cn } from "@/app/utils";
import React, { useEffect, useRef } from "react";
import { createUseGesture, pinchAction } from "@use-gesture/react";
import { useSpring, animated } from "@react-spring/web";

export default function WheelGrid({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const useGesture = createUseGesture([pinchAction]);
  const elRef = useRef<HTMLDivElement>(null);  
  const initialPosRef = useRef<number[]>([0,0]);
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
          initialPosRef.current = [tx, ty];
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


  useEffect(() => {
    console.log('rotateZ', style.rotateZ);
  }, [style.rotateZ])
  // usePinch((e) => {
  //   // console.log('we pinching?', e.pinching, e.values, e.origin);
  //   const distanceChange = Math.abs(e.delta[0]) + Math.abs(e.delta[1]);
  //   console.log('distanceChange', distanceChange);
  //   const scaleChange = distanceChange > 0 ? 1.2 : -0.99;
  //   scaleRef.current = scaleRef.current * scaleChange;
  //     // Store the pinch scale factor

  //   // Calculate transformed origin based on pinch and defined origin
  //   // const [originX, originY] = e.origin;

  //   // const transformedOriginX = originX * newScale + (1 - newScale) * originX;
  //   // const transformedOriginY = originY * newScale + (1 - newScale) * originY;

  //   // Update styles with transformed origin and scale
  //   //
  //   // const update = `scale(${newScale}) translate(-${transformedOriginX}px, -${transformedOriginY}px)`;
  //   const update = `scale(${scaleRef.current})`;
  //   // if (newScale <= 0) return;
  //   // console.log(update)
  //   elRef.current?.setAttribute('style', `transform: ${update}`);
  // }, { target: elRef })

  // const { setLevel } = useGridContext();
  // const scaleRef = useRef<number>(1);
  // const handleZoom = (event: WheelEvent) => {
  //   let scale = scaleRef.current;
  //   scale += event.deltaY * -0.01;

  //   scaleRef.current = Math.min(Math.max(1, scale), 3);

  //   // console.log("newScale", scaleRef.current);
  //   const container = document.getElementById("wheel-grid");

  //   container?.setAttribute(
  //     "style",
  //     `transform: scale(${scaleRef.current}); overflow: auto; max-width: 100%; max-height: 100%;`
  //   );

  //   if (scaleRef.current >= 2) {
  //     setLevel("1");
  //   }

  //   if (scaleRef.current >= 3) {
  //     setLevel("2");
  //   }

  //   if (scaleRef.current <= 1) {
  //     setLevel(null);
  //   }
  // };

  // useEffect(() => {
  //   const element = elRef.current;
  //   if (element) {
  //     element.addEventListener("wheel", handleZoom);
  //   }
  //   return () => element?.removeEventListener("wheel", handleZoom); // Cleanup
  // }, [elRef]);

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
