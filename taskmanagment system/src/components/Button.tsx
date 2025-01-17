import clsx from "clsx";
import React from "react";

interface Button {
  type: "submit" | "reset" | "button";
  label: string;
  className?: string;
  onClick?: () => void;
}

const Button = React.forwardRef<HTMLButtonElement, Button>(
  ({ type, label, className, onClick }, ref) => {
    return (
      <button
        type={type}
        ref={ref}
        className={clsx("", className)}
        onClick={onClick}
      >
        {label}
      </button>
    );
  }
);

export default Button;
