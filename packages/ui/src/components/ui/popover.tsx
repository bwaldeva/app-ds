"use client";

import * as React from "react";
import * as PopoverPrimitive from "@radix-ui/react-popover";
import { cn } from "@/lib/utils";

const Popover = PopoverPrimitive.Root;

const PopoverTrigger = PopoverPrimitive.Trigger;

const PopoverContent = React.forwardRef<
  React.ElementRef<typeof PopoverPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
  <PopoverPrimitive.Portal>
    <PopoverPrimitive.Content
      align={align}
      className={cn(
        "app-z-50 app-w-72 app-rounded-md app-border app-bg-popover app-p-4 app-text-popover-foreground app-shadow-md app-outline-none data-[state=open]:app-animate-in data-[state=closed]:app-animate-out data-[state=closed]:app-fade-out-0 data-[state=open]:app-fade-in-0 data-[state=closed]:app-zoom-out-95 data-[state=open]:app-zoom-in-95 data-[side=bottom]:app-slide-in-from-top-2 data-[side=left]:app-slide-in-from-right-2 data-[side=right]:app-slide-in-from-left-2 data-[side=top]:app-slide-in-from-bottom-2",
        className
      )}
      ref={ref}
      sideOffset={sideOffset}
      {...props}
    />
  </PopoverPrimitive.Portal>
));
PopoverContent.displayName = PopoverPrimitive.Content.displayName;

export { Popover, PopoverTrigger, PopoverContent };
