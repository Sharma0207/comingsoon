import React, { useState } from "react";
import { cva } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const ratingBarClasses = cva("flex items-center gap-1", {
  variants: {
    variant: {
      default: "text-yellow-400",
      outline: "text-gray-300",
      filled: "text-yellow-500",
    },
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "medium",
  },
});

const starClasses = cva("transition-all duration-200 cursor-pointer", {
  variants: {
    state: {
      filled: "text-yellow-400 hover:text-yellow-500",
      empty: "text-gray-300 hover:text-gray-400",
    },
    size: {
      small: "w-4 h-4",
      medium: "w-5 h-5",
      large: "w-6 h-6",
    },
  },
  defaultVariants: {
    state: "empty",
    size: "medium",
  },
});

const StarIcon = ({ filled, size, onClick, className }) => (
  <svg
    onClick={onClick}
    className={twMerge(
      starClasses({
        state: filled ? "filled" : "empty",
        size,
      }),
      className
    )}
    fill={filled ? "currentColor" : "none"}
    stroke="currentColor"
    strokeWidth={filled ? 0 : 2}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
    />
  </svg>
);

const RatingBar = ({
  // Optional parameters (no defaults)
  layout_width,
  position,

  // Component specific props
  maxRating = 5,
  rating = 0,
  onRatingChange,
  readonly = false,
  variant,
  size,
  className,
  starClassName,
  showValue = false,
  ...props
}) => {
  const [hoverRating, setHoverRating] = useState(0);

  // Safe validation for optional parameters
  const hasValidWidth =
    layout_width &&
    typeof layout_width === "string" &&
    layout_width?.trim() !== "";
  const hasValidPosition =
    position && typeof position === "string" && position?.trim() !== "";

  // Build optional Tailwind classes
  const optionalClasses = [
    hasValidWidth ? `w-[${layout_width}]` : "",
    hasValidPosition ? position : "",
  ]
    ?.filter(Boolean)
    ?.join(" ");

  // Safe rating change handler
  const handleRatingChange = (newRating) => {
    if (readonly) return;
    if (typeof onRatingChange === "function") {
      onRatingChange(newRating);
    }
  };

  const handleMouseEnter = (starIndex) => {
    if (!readonly) {
      setHoverRating(starIndex);
    }
  };

  const handleMouseLeave = () => {
    if (!readonly) {
      setHoverRating(0);
    }
  };

  // Generate stars
  const stars = Array.from({ length: maxRating }, (_, index) => {
    const starIndex = index + 1;
    const isFilled = starIndex <= (hoverRating || rating);

    return (
      <StarIcon
        key={index}
        filled={isFilled}
        size={size}
        onClick={() => handleRatingChange(starIndex)}
        onMouseEnter={() => handleMouseEnter(starIndex)}
        className={starClassName}
      />
    );
  });

  return (
    <div
      className={twMerge(
        ratingBarClasses({ variant, size }),
        optionalClasses,
        className
      )}
      onMouseLeave={handleMouseLeave}
      role="radiogroup"
      aria-label={`Rating: ${rating} out of ${maxRating} stars`}
      {...props}
    >
      {stars}
      {showValue && (
        <span className="ml-2 text-sm text-gray-600">
          {rating}/{maxRating}
        </span>
      )}
    </div>
  );
};

export default RatingBar;
