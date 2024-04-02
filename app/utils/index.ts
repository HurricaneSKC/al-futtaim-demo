import clsx, { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const DEFAULT_CURRENCY = 'AED';
const DEFAULT_LOCALE = 'en-AE';

export function formatPrice(
  price: number,
  locale: "en-AE" | "en-US" = DEFAULT_LOCALE,
  currency: "USD" | "AED" = DEFAULT_CURRENCY,
) {
  const formatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: currency,
  });

  return formatter.format(price);
}
