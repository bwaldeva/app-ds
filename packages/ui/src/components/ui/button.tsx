import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "app-inline-flex app-items-center app-justify-center app-whitespace-nowrap app-rounded-md app-text-sm app-font-medium app-transition-colors focus-visible:app-outline-none focus-visible:ring-1 focus-visible:app-ring-ring disabled:app-pointer-events-none disabled:app-opacity-50",
  {
    variants: {
      variant: {
        primary:
          "app-bg-primary app-text-primary-foreground app-shadow hover:app-bg-primary/90",
        destructive:
          "app-bg-destructive app-text-destructive-foreground app-shadow-sm hover:app-bg-destructive/90",
        outline:
          "app-border app-border-input app-bg-transparent app-shadow-sm hover:app-bg-accent hover:app-text-accent-foreground",
        secondary:
          "app-bg-secondary app-text-secondary-foreground app-shadow-sm hover:app-bg-secondary/80",
        ghost: "hover:app-bg-accent hover:app-text-accent-foreground",
        link: "app-text-primary app-underline-offset-4 hover:app-underline",
      },
      size: {
        default: "app-h-9 app-px-4 app-py-2",
        sm: "app-h-8 app-rounded-md app-px-3 app-text-xs",
        lg: "app-h-10 app-rounded-md app-px-8",
        icon: "app-h-9 app-w-9",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
