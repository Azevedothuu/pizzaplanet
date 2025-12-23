import type { JSX, ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
}

export function Button ({ children }: ButtonProps): JSX.Element {
  return (
    <button className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-red-600">
        {children}
    </button>
  );
}