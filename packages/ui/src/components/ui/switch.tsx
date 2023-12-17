"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { cn } from "@/lib/utils";

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "app-peer app-inline-flex app-h-5 w-9 app-shrink-0 app-cursor-pointer app-items-center app-rounded-full app-border-2 app-border-transparent app-shadow-sm app-transition-colors focus-visible:app-outline-none focus-visible:app-ring-2 focus-visible:app-ring-ring focus-visible:app-ring-offset-2 focus-visible:app-ring-offset-background disabled:app-cursor-not-allowed disabled:app-opacity-50 data-[state=checked]:app-bg-primary data-[state=unchecked]:app-bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "app-pointer-events-none app-block app-h-4 app-w-4 app-rounded-full app-bg-background app-shadow-lg app-ring-0 app-transition-transform data-[state=checked]:app-translate-x-4 data-[state=unchecked]:app-translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
));
Switch.displayName = SwitchPrimitives.Root.displayName;

export { Switch };
