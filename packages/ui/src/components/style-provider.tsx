import * as React from "react";
import { Slot, type SlotProps } from "@radix-ui/react-slot";
import "@fontsource-variable/inter";
import "@fontsource-variable/crimson-pro";
import "@fontsource-variable/jetbrains-mono";
import "@/styles/tailwind.css";

const StyleProvider = React.forwardRef<HTMLElement, SlotProps>(
  ({ ...props }, ref) => {
    return <Slot ref={ref} {...props} />;
  }
);
StyleProvider.displayName = "StyleProvider";

export { StyleProvider };
