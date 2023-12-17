"use client";

import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { MaterialSymbol } from "material-symbols-react";
import { cn } from "@/lib/utils";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Trigger
    className={cn(
      "app-flex app-h-9 app-w-full app-items-center app-justify-between app-whitespace-nowrap app-rounded-md app-border app-border-input app-bg-transparent app-px-3 app-py-2 app-text-sm app-shadow-sm app-ring-offset-background placeholder:app-text-muted-foreground focus:app-outline-none focus:app-ring-1 focus:app-ring-ring disabled:app-cursor-not-allowed disabled:app-opacity-50 [&>span]:app-line-clamp-1",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <MaterialSymbol
        className="app-h-4 app-w-4 app-opacity-50"
        symbol="expand_all"
      />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    className={cn(
      "app-flex app-cursor-default app-items-center app-justify-center app-py-1",
      className
    )}
    ref={ref}
    {...props}
  >
    <MaterialSymbol symbol="expand_less" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    className={cn(
      "app-flex app-cursor-default app-items-center app-justify-center app-py-1",
      className
    )}
    ref={ref}
    {...props}
  >
    <MaterialSymbol symbol="expand_more" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      className={cn(
        "app-relative app-z-50 app-max-h-96 app-min-w-[8rem] app-overflow-hidden app-rounded-md app-border app-bg-popover app-text-popover-foreground app-shadow-md data-[state=open]:app-animate-in data-[state=closed]:app-animate-out data-[state=closed]:app-fade-out-0 data-[state=open]:app-fade-in-0 data-[state=closed]:app-zoom-out-95 data-[state=open]:app-zoom-in-95 data-[side=bottom]:app-slide-in-from-top-2 data-[side=left]:app-slide-in-from-right-2 data-[side=right]:app-slide-in-from-left-2 data-[side=top]:app-slide-in-from-bottom-2",
        position === "popper" &&
          "data-[side=bottom]:app-translate-y-1 data-[side=left]:app--translate-x-1 data-[side=right]:app-translate-x-1 data-[side=top]:app--translate-y-1",
        className
      )}
      position={position}
      ref={ref}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "app-p-1",
          position === "popper" &&
            "app-h-[var(--radix-select-trigger-height)] app-w-full app-min-w-[var(--radix-select-trigger-width)]"
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    className={cn(
      "app-px-2 app-py-1.5 app-text-sm app-font-semibold",
      className
    )}
    ref={ref}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    className={cn(
      "app-relative app-flex app-w-full app-cursor-default app-select-none app-items-center app-rounded-sm app-py-1.5 app-pl-2 app-pr-8 app-text-sm app-outline-none focus:app-bg-accent focus:app-text-accent-foreground data-[disabled]:app-pointer-events-none data-[disabled]:app-opacity-50",
      className
    )}
    ref={ref}
    {...props}
  >
    <span className="app-absolute app-right-2 app-flex app-h-3.5 app-w-3.5 app-items-center app-justify-center">
      <SelectPrimitive.ItemIndicator>
        <MaterialSymbol className="app-h-4 app-w-4" symbol="check" />
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    className={cn("app--mx-1 app-my-1 app-h-px app-bg-muted", className)}
    ref={ref}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
