"use client";

import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { MaterialSymbol } from "material-symbols-react";
import { cn } from "@/lib/utils";

const Dialog = DialogPrimitive.Root;

const DialogTrigger = DialogPrimitive.Trigger;

const DialogPortal = DialogPrimitive.Portal;

const DialogClose = DialogPrimitive.Close;

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    className={cn(
      "app-fixed app-inset-0 app-z-50 app-bg-background/80 app-backdrop-blur-sm data-[state=open]:app-animate-in data-[state=closed]:app-animate-out data-[state=closed]:app-fade-out-0 data-[state=open]:app-fade-in-0",
      className
    )}
    ref={ref}
    {...props}
  />
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      className={cn(
        "app-fixed app-left-[50%] app-top-[50%] app-z-50 app-grid app-w-full app-max-w-lg app-translate-x-[-50%] app-translate-y-[-50%] app-gap-4 app-border app-bg-background app-p-6 app-shadow-lg app-duration-200 data-[state=open]:app-animate-in data-[state=closed]:app-animate-out data-[state=closed]:app-fade-out-0 data-[state=open]:app-fade-in-0 data-[state=closed]:app-zoom-out-95 data-[state=open]:app-zoom-in-95 data-[state=closed]:app-slide-out-to-left-1/2 data-[state=closed]:app-slide-out-to-top-[48%] data-[state=open]:app-slide-in-from-left-1/2 data-[state=open]:app-slide-in-from-top-[48%] sm:app-rounded-lg",
        className
      )}
      ref={ref}
      {...props}
    >
      {children}
      <DialogPrimitive.Close className="app-absolute app-right-4 app-top-4 app-rounded-sm app-opacity-70 app-ring-offset-background app-transition-opacity hover:opacity-100 focus:app-outline-none focus:app-ring-2 focus:app-ring-ring focus:app-ring-offset-2 disabled:app-pointer-events-none data-[state=open]:app-bg-accent data-[state=open]:app-text-muted-foreground">
        <MaterialSymbol className="h-6 w-6" symbol="close" />
        <span className="app-sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

function DialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div
      className={cn(
        "app-flex app-flex-col app-space-y-1.5 app-text-center sm:app-text-left",
        className
      )}
      {...props}
    />
  );
}
DialogHeader.displayName = "DialogHeader";

function DialogFooter({
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
DialogFooter.displayName = "DialogFooter";

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    className={cn(
      "app-text-lg app-font-semibold app-leading-none app-tracking-tight",
      className
    )}
    ref={ref}
    {...props}
  />
));
DialogTitle.displayName = DialogPrimitive.Title.displayName;

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    className={cn("app-text-sm app-text-muted-foreground", className)}
    ref={ref}
    {...props}
  />
));
DialogDescription.displayName = DialogPrimitive.Description.displayName;

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
