import type { JSX, ReactNode } from "react";

type ButtonVariant = "red" | "green";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
}

export function Button({
  children,
  className = "",
  variant = "red",
}: ButtonProps): JSX.Element {
  const variantClasses = {
    red: "bg-red-500 hover:bg-red-600",
    green: "bg-green-500 hover:bg-green-600",
  };

  return (
    <button
      className={`
        cursor-pointer
        text-white
        px-4 py-2
        rounded-md
        transition-colors
        ${variantClasses[variant]}
        ${className}
      `}
    >
      {children}
    </button>
  );
}
