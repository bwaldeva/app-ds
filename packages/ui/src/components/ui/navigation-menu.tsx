import * as React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { cva } from "class-variance-authority";
import { MaterialSymbol } from "material-symbols-react";
import { cn } from "@/lib/utils";

const NavigationMenu = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Root>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Root
    className={cn(
      "app-relative app-z-10 app-flex app-max-w-max app-flex-1 app-items-center app-justify-center",
      className
    )}
    ref={ref}
    {...props}
  >
    {children}
    <NavigationMenuViewport />
  </NavigationMenuPrimitive.Root>
));
NavigationMenu.displayName = NavigationMenuPrimitive.Root.displayName;

const NavigationMenuList = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.List>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.List
    className={cn(
      "app-group app-flex app-flex-1 app-list-none app-items-center app-justify-center app-space-x-1",
      className
    )}
    ref={ref}
    {...props}
  />
));
NavigationMenuList.displayName = NavigationMenuPrimitive.List.displayName;

const NavigationMenuItem = NavigationMenuPrimitive.Item;

const navigationMenuTriggerStyle = cva(
  "app-group app-inline-flex app-h-9 app-w-max app-items-center app-justify-center app-rounded-md app-bg-background app-px-4 app-py-2 app-text-sm app-font-medium app-transition-colors hover:app-bg-accent hover:app-text-accent-foreground focus:app-bg-accent focus:app-text-accent-foreground focus:app-outline-none disabled:app-pointer-events-none disabled:app-opacity-50 data-[active]:app-bg-accent/50 data-[state=open]:app-bg-accent/50"
);

const NavigationMenuTrigger = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <NavigationMenuPrimitive.Trigger
    className={cn(navigationMenuTriggerStyle(), "app-group", className)}
    ref={ref}
    {...props}
  >
    {children}{" "}
    <MaterialSymbol
      aria-hidden="true"
      className="app-relative app-top-[1px] app-ml-1 app-h-3 app-w-3 app-transition app-duration-300 app-group-data-[state=open]:app-rotate-180"
      symbol="expand_more"
    />
  </NavigationMenuPrimitive.Trigger>
));
NavigationMenuTrigger.displayName = NavigationMenuPrimitive.Trigger.displayName;

const NavigationMenuContent = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Content
    className={cn(
      "app-left-0 app-top-0 app-w-full data-[motion^=from-]:app-animate-in data-[motion^=to-]:app-animate-out data-[motion^=from-]:app-fade-in data-[motion^=to-]:app-fade-out data-[motion=from-end]:app-slide-in-from-right-52 data-[motion=from-start]:app-slide-in-from-left-52 data-[motion=to-end]:app-slide-out-to-right-52 data-[motion=to-start]:app-slide-out-to-left-52 md:app-absolute md:app-w-auto ",
      className
    )}
    ref={ref}
    {...props}
  />
));
NavigationMenuContent.displayName = NavigationMenuPrimitive.Content.displayName;

const NavigationMenuLink = NavigationMenuPrimitive.Link;

const NavigationMenuViewport = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Viewport>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Viewport>
>(({ className, ...props }, ref) => (
  <div
    className={cn(
      "app-absolute app-left-0 app-top-full app-flex app-justify-center"
    )}
  >
    <NavigationMenuPrimitive.Viewport
      className={cn(
        "app-origin-top-center app-relative app-mt-1.5 app-h-[var(--radix-navigation-menu-viewport-height)] app-w-full app-overflow-hidden app-rounded-md app-border app-bg-popover app-text-popover-foreground app-shadow data-[state=open]:app-animate-in data-[state=closed]:app-animate-out data-[state=closed]:app-zoom-out-95 data-[state=open]:app-zoom-in-90 md:app-w-[var(--radix-navigation-menu-viewport-width)]",
        className
      )}
      ref={ref}
      {...props}
    />
  </div>
));
NavigationMenuViewport.displayName =
  NavigationMenuPrimitive.Viewport.displayName;

const NavigationMenuIndicator = React.forwardRef<
  React.ElementRef<typeof NavigationMenuPrimitive.Indicator>,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Indicator>
>(({ className, ...props }, ref) => (
  <NavigationMenuPrimitive.Indicator
    className={cn(
      "app-top-full app-z-[1] app-flex app-h-1.5 app-items-end app-justify-center app-overflow-hidden data-[state=visible]:app-animate-in data-[state=hidden]:app-animate-out data-[state=hidden]:app-fade-out data-[state=visible]:app-fade-in",
      className
    )}
    ref={ref}
    {...props}
  >
    <div className="app-relative app-top-[60%] app-h-2 app-w-2 app-rotate-45 app-rounded-tl-sm app-bg-border app-shadow-md" />
  </NavigationMenuPrimitive.Indicator>
));
NavigationMenuIndicator.displayName =
  NavigationMenuPrimitive.Indicator.displayName;

export {
  navigationMenuTriggerStyle,
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  NavigationMenuIndicator,
  NavigationMenuViewport,
};
