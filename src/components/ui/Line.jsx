import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const lineClasses = cva("block", {
  variants: {
    orientation: {
      horizontal: "w-full h-px",
      vertical: "w-px h-full",
    },
    variant: {
      solid: "bg-gray-300",
      dashed: "border-dashed border-gray-300",
      dotted: "border-dotted border-gray-300",
      gradient: "bg-gradient-to-r from-transparent via-gray-300 to-transparent",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
    variant: "solid",
  },
});

const Line = ({
  // Component specific props
  orientation = "horizontal",
  variant = "solid",
  width,
  height,
  color = "#000000",
  className,
  style,
  ...props
}) => {
  // Build inline styles
  const lineStyles = {
    backgroundColor: variant === "solid" ? color : undefined,
    borderColor: variant !== "solid" ? color : undefined,
    width: width ? `${width}px` : undefined,
    height: height ? `${height}px` : undefined,
    ...style,
  };

  // Determine border classes for non-solid variants
  const borderClasses =
    variant !== "solid"
      ? `border-t-[1px] ${
          variant === "dashed" ? "border-dashed" : "border-dotted"
        }`
      : "";

  return (
    <div
      className={twMerge(
        lineClasses({ orientation, variant }),
        borderClasses,
        className
      )}
      style={lineStyles}
      role="separator"
      aria-orientation={orientation}
      {...props}
    />
  );
};

export default Line;
