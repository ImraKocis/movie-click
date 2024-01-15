import React, { ReactElement } from "react";
import {
  fontStyleToTailwindClass,
  ParagraphFontSize,
  paragraphFontSizeToTailwindClass,
  ParagraphFontStyle,
  TypographyColors,
  typographyColorsToTailwindClass,
} from "@/app/components/typography/utils/typographyGlobalPropertiesAndFunctions";
import { twMerge } from "tailwind-merge";

export interface ParagraphProps {
  text: string;
  color?: TypographyColors;
  style?: ParagraphFontStyle;
  size?: ParagraphFontSize;
  isAllCapital?: boolean;
}

export default function Paragraph({
  text,
  color,
  style,
  size,
  isAllCapital,
}: ParagraphProps): ReactElement {
  return (
    <p
      className={twMerge(
        typographyColorsToTailwindClass(color),
        fontStyleToTailwindClass(style),
        paragraphFontSizeToTailwindClass(size),
      )}
    >
      {isAllCapital ? text.toUpperCase() : text}
    </p>
  );
}
