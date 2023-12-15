import * as React from "react";
import { type MaterialSymbol as MaterialSymbolId } from "material-symbols";
import { cn } from "@/lib/utils";
import "material-symbols";

export interface MaterialSymbolProps
  extends React.ButtonHTMLAttributes<HTMLSpanElement> {
  symbol: MaterialSymbolId;
  styling?: "outlined" | "rounded" | "sharp";
  filled?: boolean;
  weight?: number;
  grade?: number;
  size?: number;
}

const MaterialSymbol = React.forwardRef<HTMLSpanElement, MaterialSymbolProps>(
  ({
    symbol,
    className,
    styling = "outlined",
    filled,
    weight,
    grade,
    size,
    ...props
  }: MaterialSymbolProps) => {
    let setWeight = weight;
    let setGrade = grade;
    let setSize = size;
    if (weight && (weight < 100 || weight > 700)) {
      setWeight = 400;
    }
    if (grade && (grade < -25 || grade > 200)) {
      setGrade = 0;
    }
    if (size && (size < 20 || size > 48)) {
      setSize = 24;
    }
    const fontVariations = [
      filled && "'FILL' 1",
      weight && `'wght' ${setWeight}`,
      grade && `'GRAD' ${setGrade}`,
      size && `'opsz' ${setSize}`,
    ]
      .filter((variation) => variation)
      .join(",");
    return (
      <span
        className={cn(className, `material-symbols-${styling}`)}
        style={{
          fontVariationSettings: fontVariations,
        }}
        {...props}
      >
        {symbol}
      </span>
    );
  }
);
MaterialSymbol.displayName = "MaterialSymbol";

export { MaterialSymbol };
