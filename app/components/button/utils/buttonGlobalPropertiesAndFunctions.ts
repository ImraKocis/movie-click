import { ReactElement } from "react";

export interface ButtonProps {
  text: string;
  style: ButtonStyle;
  isDisabled?: boolean;
  isAllCapital?: boolean;
  onClick?: () => void | (() => Promise<void>);
  iconBefore?: ReactElement;
}

export type ButtonStyle = "primary" | "secondary";

export const buttonStyleToTailwindClass = (
  style: ButtonStyle,
  isDisabled?: boolean,
): string => {
  if (isDisabled)
    return "bg-gray-300 rounded-lg pointer-events-none text-gray-600";
  switch (style) {
    case "primary":
      return "bg-yellow-400 hover:bg-yellow-500 rounded-lg text-black transition delay-100";
    case "secondary":
      return "bg-gray-600 hover:bg-yellow-300 rounded-lg text-white hover:text-black transition delay-100";
  }
};
