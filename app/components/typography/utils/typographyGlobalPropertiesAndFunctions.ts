export type TypographyColors = 'black' | 'white' | 'gray' | 'yellow';
export type ParagraphFontStyle = 'light' | 'regular';
export type HeadingLevel = 'h1' | 'h2' | 'h3';
export type HeadingFontStyle = 'light' | 'regular' | 'semibold' | 'bold';
export type ParagraphFontSize = 'small' | 'regular';

export const typographyColorsToTailwindClass = (
  color?: TypographyColors
): string => {
  switch (color) {
    case 'black':
      return 'text-slate-950';
    case 'gray':
      return 'text-gray-400';
    case 'white':
      return 'text-slate-300';
    case 'yellow':
      return 'text-yellow-300';
    default:
      return 'text-slate-300';
  }
};

export const fontStyleToTailwindClass = (
  style?: HeadingFontStyle | ParagraphFontStyle
): string => {
  switch (style) {
    case 'light':
      return 'font-light';
    case 'regular':
      return 'font-regular';
    case 'semibold':
      return 'font-semibold';
    case 'bold':
      return 'font-bold';
    default:
      return 'font-regular';
  }
};

export const paragraphFontSizeToTailwindClass = (
  size?: ParagraphFontSize
): string => {
  switch (size) {
    case 'regular':
      return 'md:text-web-paragraph text-mobile-paragraph';
    case 'small':
      return 'md:text-web-paragraph-small text-mobile-paragraph-small';
    default:
      return 'md:text-web-paragraph text-mobile-paragraph';
  }
};
