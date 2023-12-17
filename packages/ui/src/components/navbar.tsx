import * as React from "react";
import { MaterialSymbol } from "material-symbols-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export interface NavbarProps extends React.ComponentPropsWithRef<"div"> {
  brand?: React.ReactNode;
  navigation?: React.ReactNode;
  toolbar?: React.ReactNode;
}

const Navbar = React.forwardRef<HTMLDivElement, NavbarProps>(
  ({ brand, navigation, toolbar, children, ...props }, ref) => {
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
                <SheetTrigger asChild>
                  <Button size="icon" variant="ghost">
                    <MaterialSymbol symbol="menu" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <div className="app-grid app-gap-4 app-py-4">
                    Hello, World!
                  </div>
                </SheetContent>
              </Sheet>
            </div>
            {brand ? (
              <div className="app-flex app-items-center app-pl-2">{brand}</div>
            ) : null}
            {navigation ? (
              <nav className="app-flex app-items-center">{navigation}</nav>
            ) : null}
            {children ? (
              <div className="app-flex app-items-center">{children}</div>
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
