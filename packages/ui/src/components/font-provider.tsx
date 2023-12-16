import * as React from "react";
import { Slot, type SlotProps } from "@radix-ui/react-slot";
import "@fontsource-variable/inter";
import "@fontsource-variable/crimson-pro";
import "@fontsource-variable/jetbrains-mono";

export interface FontProviderProps extends SlotProps {
  children: React.ReactNode;
}

const FontProvider = React.forwardRef<HTMLDivElement, FontProviderProps>(
  ({ ...props }, ref) => {
    return <Slot ref={ref} {...props} />;
  }
);
FontProvider.displayName = "FontProvider";

export { FontProvider };
