import React, { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import {
  TypographyColors,
  HeadingLevel,
  HeadingFontStyle,
  typographyColorsToTailwindClass,
  fontStyleToTailwindClass,
} from '@/app/components/typography/utils/typographyGlobalPropertiesAndFunctions';

export interface HeadingProps {
  text: string;
  level: HeadingLevel;
  style?: HeadingFontStyle;
  color?: TypographyColors;
  isAllCapital?: boolean;
}

export default function Heading({
  text,
  level,
  color = 'white',
  style = 'semibold',
  isAllCapital,
}: HeadingProps): ReactElement {
  switch (level) {
    case 'h1': {
      return (
        <h1
          className={twMerge(
            'text-mobile-title-1 md:text-web-title-1',
            fontStyleToTailwindClass(style),
            typographyColorsToTailwindClass(color)
          )}
        >
          {isAllCapital ? text.toUpperCase() : text}
        </h1>
      );
    }
    case 'h2': {
      return (
        <h2
          className={twMerge(
            'text-mobile-title-2 md:text-web-title-2',
            fontStyleToTailwindClass(style),
            typographyColorsToTailwindClass(color)
          )}
        >
          {isAllCapital ? text.toUpperCase() : text}
        </h2>
      );
    }
    case 'h3': {
      return (
        <h3
          className={twMerge(
            'text-mobile-title-3 md:text-web-title-3',
            fontStyleToTailwindClass(style),
            typographyColorsToTailwindClass(color)
          )}
        >
          {isAllCapital ? text.toUpperCase() : text}
        </h3>
      );
    }
  }
}
