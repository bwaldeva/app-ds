"use client";

import * as React from "react";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { MaterialSymbol } from "material-symbols-react";
import { cn } from "@/lib/utils";

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

const DropdownMenuSubTrigger = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubTrigger>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubTrigger> & {
    inset?: boolean;
  }
>(({ className, inset, children, ...props }, ref) => (
  <DropdownMenuPrimitive.SubTrigger
    className={cn(
      "app-flex app-cursor-default app-select-none app-items-center app-rounded-sm app-px-2 app-py-1.5 app-text-sm app-outline-none focus:app-bg-accent data-[state=open]:app-bg-accent",
      inset && "pl-8",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
    <MaterialSymbol className="ml-auto h-4 w-4" symbol="chevron_right" />
  </DropdownMenuPrimitive.SubTrigger>
));
DropdownMenuSubTrigger.displayName =
  DropdownMenuPrimitive.SubTrigger.displayName;

const DropdownMenuSubContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.SubContent>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.SubContent>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.SubContent
    className={cn(
      "app-z-50 app-min-w-[8rem] app-overflow-hidden app-rounded-md app-border app-bg-popover app-p-1 app-text-popover-foreground app-shadow-lg data-[state=open]:app-animate-in data-[state=closed]:app-animate-out data-[state=closed]:app-fade-out-0 data-[state=open]:app-fade-in-0 data-[state=closed]:app-zoom-out-95 data-[state=open]:app-zoom-in-95 data-[side=bottom]:app-slide-in-from-top-2 data-[side=left]:app-slide-in-from-right-2 data-[side=right]:app-slide-in-from-left-2 data-[side=top]:app-slide-in-from-bottom-2",
      className
    )}
    ref={ref}
    {...props}
  />
));
DropdownMenuSubContent.displayName =
  DropdownMenuPrimitive.SubContent.displayName;

const DropdownMenuContent = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Content>
>(({ className, sideOffset = 4, ...props }, ref) => (
  <DropdownMenuPrimitive.Portal>
    <DropdownMenuPrimitive.Content
      className={cn(
        "app-z-50 app-min-w-[8rem] app-overflow-hidden app-rounded-md app-border app-bg-popover app-p-1 app-text-popover-foreground app-shadow-md",
        "data-[state=open]:app-animate-in data-[state=closed]:app-animate-out data-[state=closed]:app-fade-out-0 data-[state=open]:app-fade-in-0 data-[state=closed]:app-zoom-out-95 data-[state=open]:app-zoom-in-95 data-[side=bottom]:app-slide-in-from-top-2 data-[side=left]:app-slide-in-from-right-2 data-[side=right]:app-slide-in-from-left-2 data-[side=top]:app-slide-in-from-bottom-2",
        className
      )}
      ref={ref}
      sideOffset={sideOffset}
      {...props}
    />
  </DropdownMenuPrimitive.Portal>
));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;

const DropdownMenuItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Item> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Item
    className={cn(
      "app-relative app-flex app-cursor-default app-select-none app-items-center app-rounded-sm app-px-2 app-py-1.5 app-text-sm app-outline-none app-transition-colors focus:app-bg-accent focus:app-text-accent-foreground data-[disabled]:app-pointer-events-none data-[disabled]:app-opacity-50",
      inset && "app-pl-8",
      className
    )}
    ref={ref}
    {...props}
  />
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;

const DropdownMenuCheckboxItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.CheckboxItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.CheckboxItem>
>(({ className, children, checked, ...props }, ref) => (
  <DropdownMenuPrimitive.CheckboxItem
    checked={checked}
    className={cn(
      "app-relative app-flex app-cursor-default app-select-none app-items-center app-rounded-sm app-py-1.5 app-pl-8 app-pr-2 app-text-sm app-outline-none app-transition-colors focus:app-bg-accent focus:app-text-accent-foreground data-[disabled]:app-pointer-events-none data-[disabled]:app-opacity-50",
      className
    )}
    ref={ref}
    {...props}
  >
    <span className="app-absolute app-left-2 app-flex app-h-3.5 app-w-3.5 app-items-center app-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <MaterialSymbol className="app-h-4 app-w-4" symbol="check" />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.CheckboxItem>
));
DropdownMenuCheckboxItem.displayName =
  DropdownMenuPrimitive.CheckboxItem.displayName;

const DropdownMenuRadioItem = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.RadioItem>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.RadioItem>
>(({ className, children, ...props }, ref) => (
  <DropdownMenuPrimitive.RadioItem
    className={cn(
      "app-relative app-flex app-cursor-default app-select-none app-items-center app-rounded-sm app-py-1.5 app-pl-8 app-pr-2 app-text-sm app-outline-none app-transition-colors focus:app-bg-accent focus:app-text-accent-foreground data-[disabled]:app-pointer-events-none data-[disabled]:app-opacity-50",
      className
    )}
    ref={ref}
    {...props}
  >
    <span className="app-absolute app-left-2 app-flex app-h-3.5 app-w-3.5 app-items-center app-justify-center">
      <DropdownMenuPrimitive.ItemIndicator>
        <MaterialSymbol
          className="app-h-4 app-w-4 app-fill-current"
          filled
          symbol="circle"
        />
      </DropdownMenuPrimitive.ItemIndicator>
    </span>
    {children}
  </DropdownMenuPrimitive.RadioItem>
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;

const DropdownMenuLabel = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Label> & {
    inset?: boolean;
  }
>(({ className, inset, ...props }, ref) => (
  <DropdownMenuPrimitive.Label
    className={cn(
      "app-px-2 app-py-1.5 app-text-sm app-font-semibold",
      inset && "app-pl-8",
      className
    )}
    ref={ref}
    {...props}
  />
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;

const DropdownMenuSeparator = React.forwardRef<
  React.ElementRef<typeof DropdownMenuPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof DropdownMenuPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <DropdownMenuPrimitive.Separator
    className={cn("app--mx-1 app-my-1 app-h-px app-bg-muted", className)}
    ref={ref}
    {...props}
  />
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;

function DropdownMenuShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>): JSX.Element {
  return (
    <span
      className={cn(
        "app-ml-auto app-text-xs app-tracking-widest app-opacity-60",
        className
      )}
      {...props}
    />
  );
}
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
