"use client";

import { cn } from "@/app/utils";
import React, { useEffect, useRef, useState } from "react";
import { useGridContext } from "../CarGrid/context";

const view = (() => {
  const matrix = [1, 0, 0, 1, 0, 0]; // current view transform
  var m = matrix; // alias
  var scale = 1; // current scale
  const pos = { x: 0, y: 0 }; // current position of origin
  var dirty = true;
  const API = {
    applyTo(el: any) {
      if (dirty) {
        this.update();
      }
      el.style.transform = `matrix(${m[0]},${m[1]},${m[2]},${m[3]},${m[4]},${m[5]})`;
    },
    update() {
      dirty = false;
      m[3] = m[0] = scale;
      m[2] = m[1] = 0;
      m[4] = pos.x;
      m[5] = pos.y;
    },
    pan(amount: { x: number, y: number}) {
      if (dirty) {
        this.update();
      }
      pos.x += amount.x;
      pos.y += amount.y;
      dirty = true;
    },
    scaleAt(at: { x: number, y: number }, amount: number) {
      // at in screen coords
      if (dirty) {
        this.update();
      }
      scale *= amount;
      pos.x = at.x - (at.x - pos.x) * amount;
      pos.y = at.y - (at.y - pos.y) * amount;
      dirty = true;
    },
  };
  return API;
})();
// const wheelGrid = document.getElementById('#wheel-grid');

const mouse = {x: 0, y: 0, oldX: 0, oldY: 0, button: false};
function mouseEvent(el: any, event: MouseEvent) {
    if (event.type === "mousedown") { mouse.button = true }
    if (event.type === "mouseup" || event.type === "mouseout") { mouse.button = false }
    mouse.oldX = mouse.x;
    mouse.oldY = mouse.y;
    mouse.x = event.pageX;
    mouse.y = event.pageY;
    if(mouse.button) { // pan
      view.pan({x: mouse.x - mouse.oldX, y: mouse.y - mouse.oldY});
      view.applyTo(el);
    }
    event.preventDefault();
}
function mouseWheelEvent(el: any, event: any) {
    const x = event.pageX - (el?.offsetWidth! / 2);
    const y = event.pageY - (el?.offsetHeight! / 2);
    if (event.deltaY < 0) { 
        view.scaleAt({x, y}, 1.1);
        view.applyTo(el);
    } else { 
        view.scaleAt({x, y}, 1 / 1.1);
        view.applyTo(el);
    }
    event.preventDefault();
}

export default function WheelGrid({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const { setLevel } = useGridContext();
  const elRef = useRef<HTMLDivElement>(null);
  const scaleRef = useRef<number>(1);
  const handleZoom = (event: WheelEvent) => {
    let scale = scaleRef.current;
    scale += event.deltaY * -0.01;

    scaleRef.current = Math.min(Math.max(1, scale), 3);

    // console.log("newScale", scaleRef.current);
    const container = document.getElementById("wheel-grid");

    container?.setAttribute(
      "style",
      `transform: scale(${scaleRef.current}); overflow: auto; max-width: 100%; max-height: 100%;`
    );

    if (scaleRef.current >= 2) {
      setLevel("1");
    }

    if (scaleRef.current >= 3) {
      setLevel("2");
    }

    if (scaleRef.current <= 1) {
      setLevel(null);
    }
  };

  useEffect(() => {
    const element = elRef.current;
    if (element) {
      element.addEventListener("wheel", handleZoom);
    }
    return () => element?.removeEventListener("wheel", handleZoom); // Cleanup
  }, [elRef]);

  return (
    <div className="relative w-full h-full max-h-[90%] overflow-auto">
      <div
        ref={elRef}
        className={cn("grid grid-cols-4 gap-0", className)}
        id="wheel-grid"
        style={{ transform: `scale(${scaleRef.current})` }}
      >
        {children}
      </div>
    </div>
  );
}
