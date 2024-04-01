import { cn } from "@/app/utils";
import Image from "next/image";
import React from "react";

export const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "card rounded-none w-full h-full bg-base-100 shadow-xl relative",
        className
      )}
      {...props}
    />
  );
});

Card.displayName = "Card";

export const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col p-2", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

type CardImageProps = { alt: string, src: string, placeholder?: 'blur' | 'empty', width?: number, height?: number } & React.HTMLAttributes<HTMLImageElement>;
export const CardImage = React.forwardRef<HTMLImageElement, CardImageProps>(
  ({ src, alt, className, ...props }, ref) => {
    return (
      <Image
        ref={ref}
        className={cn("", className)}
        alt={alt}
        src={src}
        defaultChecked={false}        
        {...props}
      />
    );
  }
);
CardImage.displayName = 'CardImage';


export const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "card-title",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

export const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription";

export const CardBody = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("card-body", className)} {...props} />
))
CardBody.displayName = "CardBody"


export const CardActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("card-actions", className)}
    {...props}
  />
))
CardActions.displayName = "CardActions"
