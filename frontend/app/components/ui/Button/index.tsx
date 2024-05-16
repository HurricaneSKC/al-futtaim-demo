"use client";

import React from "react";
import { cn } from "@/app/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = React.forwardRef<HTMLButtonElement, Props>(
  ({ children, className, ...props }, ref) => {
    return (
      <button {...props} ref={ref} className={cn("btn btn-primary w-full", className)}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;