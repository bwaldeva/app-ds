import * as React from "react";
import { MaterialSymbol } from "material-symbols-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export interface NavbarProps extends React.ComponentPropsWithRef<"div"> {
  brand?: React.ReactNode;
  navItems?: React.ReactNode[];
  toolbar?: React.ReactNode;
}

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ brand, navItems, toolbar, children, ...props }, ref) => {
    return (
      <div
        className="app-sticky app-z-50 app-top-0 app-h-16 app-px-3 app-bg-background dark:app-border app-shadow"
        ref={ref}
        {...props}
      >
        <header className="app-h-full">
          <div className="app-flex app-h-full app-items-center">
            <div className="app-flex app-items-center">
              <Sheet>
                <SheetTrigger asChild className="md:app-hidden">
                  <Button size="icon" variant="outline">
                    <MaterialSymbol symbol="menu" weight={300} />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  {navItems ? (
                    <div className="app-flex app-flex-col app-py-2 app-gap-2">
                      {navItems}
                    </div>
                  ) : null}
                </SheetContent>
              </Sheet>
            </div>
            {brand ? (
              <div className="app-pl-2 app-flex app-items-center">{brand}</div>
            ) : null}
            {navItems ? (
              <nav className="app-hidden app-px-2 app-mr-auto app-ml-auto md:app-flex md:app-items-center md:app-gap-4">
                {navItems}
              </nav>
            ) : null}
            {children ? (
              <div className="app-flex app-mr-auto app-ml-auto app-items-center app-gap-4">
                {children}
              </div>
            ) : null}
            {toolbar ? (
              <div className="app-flex app-ml-auto app-items-center app-justify-end">
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
