"use client";

import { cn } from "@/app/utils";
import React from "react";
import { useGridContext } from "../context";

export default function CarPrice({
  price,
  currency = "AED",
  locale = 'en-AE',
  className,
}: {
  price: number;
  currency?: 'USD' | 'AED',
  locale?: 'en-AE' | 'en-US';
  className?: string;
}) {
  const { level } = useGridContext();
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  });
  
  if (level === null) return null;

  if (level === "1" || level === '2') {
    return (
    <h1 className={cn("text-[#8D8D8D] text-[5px]", className)}>
      from {formatter.format(price)}
    </h1>
    );
  }
  
  return null;
}
