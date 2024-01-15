"use client";
import React, { ReactElement } from "react";
import { twMerge } from "tailwind-merge";
import {
  ButtonProps,
  buttonStyleToTailwindClass,
} from "@/app/components/button/utils/buttonGlobalPropertiesAndFunctions";
import { useRouter } from "next/navigation";

export interface LinkButtonProps extends ButtonProps {
  link: string;
}

export default function LinkButton({
  text,
  link,
  style,
  isDisabled,
  isAllCapital,
  iconBefore,
}: LinkButtonProps): ReactElement {
  const router = useRouter();
  return (
    <button
      onClick={() => router.push(link)}
      className={twMerge(
        "flex justify-center items-center px-8 py-6 gap-4",
        buttonStyleToTailwindClass(style, isDisabled),
      )}
      aria-disabled={isDisabled}
    >
      <>{iconBefore}</>
      {isAllCapital ? text.toUpperCase() : text}
    </button>
  );
}
