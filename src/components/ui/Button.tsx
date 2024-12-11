import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const button = cva(
  " md:py-2 py-2  lg:py-3 font-normal  transition-all duration-100 font-lexend rounded-xl ",
  {
    variants: {
      variant: {
        solid: ["bg-red-button"],
        outline: ["outline-red-button"],
      },
    },
    defaultVariants: {
      variant: "solid",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  icon?: string;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  icon,
  text,
  className = "",
  ...props
}) => (
  <button className={`${button({ variant })} ${className}`} {...props}>
    {icon && (
      <img
        src={icon}
        alt="icon"
        className="inline-block mr-2 w-6 h-6 image-cover"
      />
    )}
    {text}
  </button>
);
