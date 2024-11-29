import clsx from "clsx";
import { forwardRef } from "react";
import { FieldError } from "react-hook-form";

type InputProps = {
  label: string;
  labelStyle?: string;
  error?: FieldError;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, labelStyle, error, ...props }, ref) => {
    return (
      <div>
        {label && (
          <label htmlFor={props.id} className={labelStyle}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id="email"
          className={clsx("w-full px-4 py-2 border border-gray-300 rounded", {
            "border-red-500": Boolean(error),
          })}
          {...props}
        />
        {error && <span className="text-red-500">{error.message}</span>}
      </div>
    );
  }
);

Input.displayName = "Input";
