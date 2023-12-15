import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";

export interface FontProviderProps
  extends React.ButtonHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const FontProvider = React.forwardRef<HTMLDivElement, FontProviderProps>(
  ({ ...props }, ref) => {
    return <Slot ref={ref} {...props} />;
  }
);
FontProvider.displayName = "FontProvider";

export { FontProvider };
