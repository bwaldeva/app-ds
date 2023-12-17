"use client";

import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { MaterialSymbol } from "material-symbols-react";
import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
  <CheckboxPrimitive.Root
    className={cn(
      "app-peer app-h-4 app-w-4 app-shrink-0 app-rounded-sm app-border app-border-primary app-shadow focus-visible:app-outline-none focus-visible:app-ring-1 focus-visible:app-ring-ring disabled:app-cursor-not-allowed disabled:app-opacity-50 data-[state=checked]:app-bg-primary data-[state=checked]:app-text-primary-foreground",
      className
    )}
    ref={ref}
    {...props}
  >
    <CheckboxPrimitive.Indicator
      className={cn(
        "app-flex app-items-center app-justify-center app-text-current"
      )}
    >
      <MaterialSymbol className="app-h-4 app-w-4" symbol="check" />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

export { Checkbox };
