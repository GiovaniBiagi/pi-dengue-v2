import { tv, VariantProps } from "tailwind-variants";

const buttonVariants = tv({
  base: "py-2 px-4 rounded cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed w-full",
  variants: {
    variant: {
      primary: "bg-red-500 text-white hover:bg-red-600 hover:transition-colors",
      secondary:
        "bg-gray-200 text-gray-800 hover:bg-gray-300 hover:transition-colors",
      outline:
        "border border-gray-200 text-gray-800 hover:bg-gray-200 hover:transition-colors",
      ghost: "text-gray-800 hover:bg-gray-200 hover:transition-colors",
    },
  },
});

export type Button = React.HTMLAttributes<HTMLButtonElement> & {
  label?: string;
  type?: "button" | "submit" | "reset";
} & VariantProps<typeof buttonVariants>;

export const Button = ({
  label,
  variant,
  type,
  className,
  ...props
}: Button) => {
  return (
    <button
      className={buttonVariants({ variant, className })}
      {...props}
      type={type}
    >
      {label}
    </button>
  );
};