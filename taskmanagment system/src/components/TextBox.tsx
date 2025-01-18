import { clsx } from "clsx";
import React from "react";
import {
  FieldValues,
  UseFormRegister,
  FieldError,
  FieldErrorsImpl,
} from "react-hook-form";

// Define the types for the props
interface TextBoxProps {
  type?: "text" | "password" | "email" | "number" | "tel" | "url" | "submit";
  placeholder?: string;
  label: string;
  name: string;
  className?: string;
  register: UseFormRegister<FieldValues>;
  error?: FieldError | FieldErrorsImpl<any> | undefined;
}

const TextBox = React.forwardRef<HTMLInputElement, TextBoxProps>(
  ({ type, placeholder, label, name, className, register, error }, ref) => {
    return (
      <div className="w-full flex flex-col gap-1">
        {label && (
          <label htmlFor={name} className="text-gray-400">
            {label}
          </label>
        )}
        <div>
          <input
            type={type}
            placeholder={placeholder}
            {...register(name)}
            ref={ref}
            aria-invalid={error ? "true" : "false"}
            className={clsx(
              "px-3 py-2 2xl:py-3 border border-blue-300  text-gray-800 outline-none focus:ring-2 ring-green-500",
              className
            )}
          />
        </div>
        {error && (
          <span className="text-xl text-red-800 mt-1">
            {typeof error?.message === "string" ? error.message : ""}
          </span>
        )}
      </div>
    );
  }
);

export default TextBox;
