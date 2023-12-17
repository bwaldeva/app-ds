"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    className={cn(
      "app-relative app-flex app-w-full app-touch-none app-select-none app-items-center",
      className
    )}
    ref={ref}
    {...props}
  >
    <SliderPrimitive.Track className="app-relative app-h-1.5 app-w-full app-grow app-overflow-hidden app-rounded-full app-bg-primary/20">
      <SliderPrimitive.Range className="app-absolute app-h-full app-bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="app-block app-h-4 app-w-4 app-rounded-full app-border app-border-primary/50 app-bg-background app-shadow app-transition-colors focus-visible:app-outline-none focus-visible:app-ring-1 focus-visible:app-ring-ring disabled:app-pointer-events-none disabled:app-opacity-50" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
