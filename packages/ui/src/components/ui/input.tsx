import * as React from "react";
import { cn } from "@/lib/utils";

export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        className={cn(
          "app-flex app-h-9 app-w-full app-rounded-md app-border app-border-input app-bg-transparent app-px-3 app-py-1 app-text-sm app-shadow-sm app-transition-colors file:app-border-0 file:app-bg-transparent file:app-text-sm file:app-font-medium placeholder:app-text-muted-foreground focus-visible:app-outline-none focus-visible:app-ring-1 focus-visible:app-ring-ring disabled:app-cursor-not-allowed disabled:app-opacity-50",
          className
        )}
        ref={ref}
        type={type}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
