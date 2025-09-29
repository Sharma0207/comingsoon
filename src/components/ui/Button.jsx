import React from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonClasses = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary: "hover:opacity-90 focus:ring-blue-500",
        secondary:
          "bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-500",
        outline:
          "border-2 bg-transparent hover:bg-opacity-10 focus:ring-blue-500",
      },
      size: {
        small: "text-sm px-3 py-1.5",
        medium: "text-base px-4 py-2",
        large: "text-lg px-6 py-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "medium",
    },
  }
);

const Button = ({
  // Required parameters with defaults
  text = "Let's Connect",
  text_font_size = "13",
  text_font_family = "Outfit",
  text_font_weight = "500",
  text_line_height = "17px",
  text_text_align = "left",
  text_color = "#ffffff",

  // Optional parameters (no defaults)
  border_border,
  border_border_radius,
  layout_width,
  padding,
  position,
  layout_gap,

  // Standard React props
  variant,
  size,
  disabled = false,
  className,
  children,
  onClick,
  type = "button",
  ...props
}) => {
  // Safe validation for optional parameters
  const hasValidBorder =
    border_border &&
    typeof border_border === "string" &&
    border_border?.trim() !== "";
  const hasValidBorderRadius =
    border_border_radius &&
    typeof border_border_radius === "string" &&
    border_border_radius?.trim() !== "";
  const hasValidWidth =
    layout_width &&
    typeof layout_width === "string" &&
    layout_width?.trim() !== "";
  const hasValidPadding =
    padding && typeof padding === "string" && padding?.trim() !== "";
  const hasValidPosition =
    position && typeof position === "string" && position?.trim() !== "";
  const hasValidGap =
    layout_gap && typeof layout_gap === "string" && layout_gap?.trim() !== "";

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : "",
    hasValidPadding ? `p-[${padding}]` : "",
    hasValidPosition ? position : "",
    hasValidGap ? `gap-[${layout_gap}]` : "",
  ]
    ?.filter(Boolean)
    ?.join(" ");

  // Build inline styles for required parameters
  const buttonStyles = {
    fontSize: `${text_font_size}px`,
    fontFamily: text_font_family,
    fontWeight: text_font_weight,
    lineHeight: text_line_height,
    textAlign: text_text_align,
    color: text_color,
    border: hasValidBorder ? border_border : undefined,
    borderRadius: hasValidBorderRadius ? border_border_radius : undefined,
  };

  // Safe click handler
  const handleClick = (event) => {
    if (disabled) return;
    if (typeof onClick === "function") {
      onClick(event);
    }
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={handleClick}
      style={buttonStyles}
      className={twMerge(
        buttonClasses({ variant, size }),
        optionalClasses,
        className
      )}
      aria-disabled={disabled}
      {...props}
    >
      {children || text}
    </button>
  );
};

export default Button;
