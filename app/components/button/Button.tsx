import React, { ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import {
  ButtonProps,
  buttonStyleToTailwindClass,
} from "@/app/components/button/utils/buttonGlobalPropertiesAndFunctions";

export default function Button({
  text,
  style,
  isDisabled,
  isAllCapital,
  iconBefore,
  onClick,
}: ButtonProps): ReactElement {
  return (
    <button
      className={twMerge(
        "flex justify-center items-center px-8 py-6 gap-4",
        buttonStyleToTailwindClass(style, isDisabled),
      )}
      disabled={isDisabled}
      onClick={onClick}
    >
      <>{iconBefore}</>
      {isAllCapital ? text.toUpperCase() : text}
    </button>
  );
}
