import * as React from "react";

import { cn } from "@/lib/utils";
import { FieldError } from "react-hook-form";

type InputProps = React.ComponentProps<"input"> & {
  error?: FieldError;
  label?: string;
  labelStyle?: string;
};

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, label, labelStyle, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label htmlFor={props.id} className={labelStyle}>
            {label}
          </label>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <span className="text-red-500 text-xs">{error.message}</span>}
      </div>
    );
  }
);
Input.displayName = "Input";

export { Input };
