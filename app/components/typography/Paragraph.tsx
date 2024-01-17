import React, { ReactElement } from 'react';
import {
  ParagraphFontSize,
  ParagraphFontStyle,
  TypographyColors,
  fontStyleToTailwindClass,
  paragraphFontSizeToTailwindClass,
  typographyColorsToTailwindClass,
} from '@/app/components/typography/utils/typographyGlobalPropertiesAndFunctions';
import { twMerge } from 'tailwind-merge';

export interface ParagraphProps {
  text: string;
  color?: TypographyColors;
  style?: ParagraphFontStyle;
  size?: ParagraphFontSize;
  isAllCapital?: boolean;
  changeColorOnHover?: boolean;
  isPartOfCssGroup?: boolean;
}

export default function Paragraph({
  text,
  color,
  style,
  size,
  isAllCapital,
  changeColorOnHover,
  isPartOfCssGroup,
}: ParagraphProps): ReactElement {
  return (
    <p
      className={twMerge(
        paragraphFontSizeToTailwindClass(size),
        fontStyleToTailwindClass(style),
        typographyColorsToTailwindClass(color),
        changeColorOnHover
          ? isPartOfCssGroup
            ? 'transition delay-150 hover:text-white group-hover:text-white'
            : 'transition delay-150 hover:text-white'
          : ''
      )}
    >
      {isAllCapital ? text.toUpperCase() : text}
    </p>
  );
}
