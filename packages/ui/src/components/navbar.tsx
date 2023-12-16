import * as React from "react";
import { MaterialSymbol } from "@/components/ui/material-symbols";
import { Button } from "@/components/ui/button";

export interface NavbarProps extends React.ComponentPropsWithRef<"div"> {
  brand?: React.ReactNode;
  navigation?: React.ReactNode;
  toolbar?: React.ReactNode;
}

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ brand, navigation, toolbar, children, ...props }, ref) => {
    return (
      <div
        className="sticky z-50 top-0 h-16 px-3 bg-background shadow dark:border"
        ref={ref}
        {...props}
      >
        <header className="h-full">
          <div className="flex h-full items-center">
            <div className="flex items-center">
              <Button size="icon" variant="outline">
                <MaterialSymbol symbol="menu" />
              </Button>
            </div>
            {brand ? <div className="flex items-center">{brand}</div> : null}
            {navigation ? (
              <nav className="flex items-center">{navigation}</nav>
            ) : null}
            {children ? (
              <div className="flex items-center">{children}</div>
            ) : null}
            {toolbar ? (
              <div className="flex ml-auto items-center justify-end">
                {toolbar}
              </div>
            ) : null}
          </div>
        </header>
      </div>
    );
  }
);
Navbar.displayName = "Navbar";

export { Navbar };
