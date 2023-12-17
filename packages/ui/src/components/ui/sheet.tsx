"use client";

import * as React from "react";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva, type VariantProps } from "class-variance-authority";
import { MaterialSymbol } from "material-symbols-react";
import { cn } from "@/lib/utils";

const Sheet = SheetPrimitive.Root;

const SheetTrigger = SheetPrimitive.Trigger;

const SheetClose = SheetPrimitive.Close;

const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Overlay
    className={cn(
      "app-fixed app-inset-0 app-z-50 app-bg-background/80 app-backdrop-blur-sm data-[state=open]:app-animate-in data-[state=closed]:app-animate-out data-[state=closed]:app-fade-out-0 data-[state=open]:app-fade-in-0",
      className
    )}
    {...props}
    ref={ref}
  />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

const sheetVariants = cva(
  "app-fixed app-z-50 app-gap-4 app-bg-background app-p-6 app-shadow-lg app-transition app-ease-in-out data-[state=open]:app-animate-in data-[state=closed]:app-animate-out data-[state=closed]:app-duration-300 data-[state=open]:app-duration-500",
  {
    variants: {
      side: {
        top: "app-inset-x-0 app-top-0 app-border-b data-[state=closed]:app-slide-out-to-top data-[state=open]:app-slide-in-from-top",
        bottom:
          "app-inset-x-0 app-bottom-0 app-border-t data-[state=closed]:app-slide-out-to-bottom data-[state=open]:app-slide-in-from-bottom",
        left: "app-inset-y-0 app-left-0 app-h-full app-w-3/4 app-border-r data-[state=closed]:app-slide-out-to-left data-[state=open]:app-slide-in-from-left sm:app-max-w-sm",
        right:
          "app-inset-y-0 app-right-0 app-h-full app-w-3/4 app-border-l data-[state=closed]:app-slide-out-to-right data-[state=open]:app-slide-in-from-right sm:app-max-w-sm",
      },
    },
    defaultVariants: {
      side: "right",
    },
  }
);

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    VariantProps<typeof sheetVariants> {}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = "right", className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <SheetPrimitive.Content
      ref={ref}
      className={cn(sheetVariants({ side }), className)}
      {...props}
    >
      {children}
      <SheetPrimitive.Close className="app-absolute app-right-4 app-top-4 app-rounded-sm app-opacity-70 app-ring-offset-background app-transition-opacity hover:app-opacity-100 focus:app-outline-none focus:app-ring-2 focus:app-ring-ring focus:app-ring-offset-2 disabled:app-pointer-events-none data-[state=open]:app-bg-secondary">
        <MaterialSymbol className="app-h-4 app-w-4" symbol="close" />
        <span className="app-sr-only">Close</span>
      </SheetPrimitive.Close>
    </SheetPrimitive.Content>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

function SheetHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      className={cn(
        "app-flex app-flex-col app-space-y-2 app-text-center sm:app-text-left",
        className
      )}
      {...props}
    />
  );
}
SheetHeader.displayName = "SheetHeader";

function SheetFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      className={cn(
        "app-flex app-flex-col-reverse sm:app-flex-row sm:app-justify-end sm:app-space-x-2",
        className
      )}
      {...props}
    />
  );
}
SheetFooter.displayName = "SheetFooter";

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Title
    className={cn(
      "app-text-lg app-font-semibold app-text-foreground",
      className
    )}
    ref={ref}
    {...props}
  />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <SheetPrimitive.Description
    className={cn("app-text-sm app-text-muted-foreground", className)}
    ref={ref}
    {...props}
  />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
