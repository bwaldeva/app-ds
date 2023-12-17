"use client";

import * as React from "react";
import { type DialogProps } from "@radix-ui/react-dialog";
import { Command as CommandPrimitive } from "cmdk";
import { MaterialSymbol } from "material-symbols-react";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent } from "@/components/ui/dialog";

const Command = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive>
>(({ className, ...props }, ref) => (
  <CommandPrimitive
    className={cn(
      "app-flex app-h-full app-w-full app-flex-col app-overflow-hidden app-rounded-md app-bg-popover app-text-popover-foreground",
      className
    )}
    ref={ref}
    {...props}
  />
));
Command.displayName = CommandPrimitive.displayName;

type CommandDialogProps = DialogProps;

function CommandDialog({
  children,
  ...props
}: CommandDialogProps): JSX.Element {
  return (
    <Dialog {...props}>
      <DialogContent className="app-overflow-hidden app-p-0">
        <Command className="[&_[cmdk-group-heading]]:app-px-2 [&_[cmdk-group-heading]]:app-font-medium [&_[cmdk-group-heading]]:app-text-muted-foreground [&_[cmdk-group]:not([hidden])_~[cmdk-group]]:app-pt-0 [&_[cmdk-group]]:app-px-2 [&_[cmdk-input-wrapper]_svg]:app-h-5 [&_[cmdk-input-wrapper]_svg]:app-w-5 [&_[cmdk-input]]:app-h-12 [&_[cmdk-item]]:app-px-2 [&_[cmdk-item]]:app-py-3 [&_[cmdk-item]_svg]:app-h-5 [&_[cmdk-item]_svg]:app-w-5">
          {children}
        </Command>
      </DialogContent>
    </Dialog>
  );
}

const CommandInput = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Input>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Input>
>(({ className, ...props }, ref) => (
  <div className="app-flex app-items-center app-border-b app-px-3">
    <MaterialSymbol
      className="app-mr-2 app-h-4 app-w-4 app-shrink-0 app-opacity-50"
      symbol="search"
    />
    <CommandPrimitive.Input
      className={cn(
        "app-flex app-h-10 app-w-full app-rounded-md app-bg-transparent app-py-3 app-text-sm app-outline-none placeholder:app-text-muted-foreground disabled:app-cursor-not-allowed disabled:app-opacity-50",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
));

CommandInput.displayName = CommandPrimitive.Input.displayName;

const CommandList = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.List>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.List
    className={cn(
      "app-max-h-[300px] app-overflow-y-auto app-overflow-x-hidden",
      className
    )}
    ref={ref}
    {...props}
  />
));

CommandList.displayName = CommandPrimitive.List.displayName;

const CommandEmpty = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Empty>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Empty>
>((props, ref) => (
  <CommandPrimitive.Empty
    className="app-py-6 app-text-center app-text-sm"
    ref={ref}
    {...props}
  />
));

CommandEmpty.displayName = CommandPrimitive.Empty.displayName;

const CommandGroup = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Group>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Group>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Group
    className={cn(
      "app-overflow-hidden app-p-1 app-text-foreground [&_[cmdk-group-heading]]:app-px-2 [&_[cmdk-group-heading]]:app-py-1.5 [&_[cmdk-group-heading]]:app-text-xs [&_[cmdk-group-heading]]:app-font-medium [&_[cmdk-group-heading]]:app-text-muted-foreground",
      className
    )}
    ref={ref}
    {...props}
  />
));

CommandGroup.displayName = CommandPrimitive.Group.displayName;

const CommandSeparator = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Separator
    className={cn("app--mx-1 app-h-px app-bg-border", className)}
    ref={ref}
    {...props}
  />
));
CommandSeparator.displayName = CommandPrimitive.Separator.displayName;

const CommandItem = React.forwardRef<
  React.ElementRef<typeof CommandPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof CommandPrimitive.Item>
>(({ className, ...props }, ref) => (
  <CommandPrimitive.Item
    className={cn(
      "app-relative app-flex app-cursor-default app-select-none app-items-center app-rounded-sm app-px-2 app-py-1.5 app-text-sm app-outline-none aria-selected:app-bg-accent aria-selected:app-text-accent-foreground data-[disabled]:app-pointer-events-none data-[disabled]:app-opacity-50",
      className
    )}
    ref={ref}
    {...props}
  />
));

CommandItem.displayName = CommandPrimitive.Item.displayName;

function CommandShortcut({
  className,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>): JSX.Element {
  return (
    <span
      className={cn(
        "app-ml-auto app-text-xs app-tracking-widest app-text-muted-foreground",
        className
      )}
      {...props}
    />
  );
}
CommandShortcut.displayName = "CommandShortcut";

export {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
};
