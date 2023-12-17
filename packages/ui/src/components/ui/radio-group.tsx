"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { MaterialSymbol } from "material-symbols-react";
import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Root
      className={cn("app-grid app-gap-2", className)}
      {...props}
      ref={ref}
    />
  );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
  React.ElementRef<typeof RadioGroupPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
  return (
    <RadioGroupPrimitive.Item
      className={cn(
        "app-aspect-square app-h-4 app-w-4 app-rounded-full app-border app-border-primary app-text-primary app-shadow focus:app-outline-none focus-visible:app-ring-1 focus-visible:app-ring-ring disabled:app-cursor-not-allowed disabled:app-opacity-50",
        className
      )}
      ref={ref}
      {...props}
    >
      <RadioGroupPrimitive.Indicator className="app-flex app-items-center app-justify-center">
        <MaterialSymbol
          className="app-h-3.5 app-w-3.5 app-fill-primary"
          symbol="check"
        />
      </RadioGroupPrimitive.Indicator>
    </RadioGroupPrimitive.Item>
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
