export type TypographyColors = "black" | "white" | "grey";
export type ParagraphFontStyle = "light" | "regular";
export type HeadingLevel = "h1" | "h2" | "h3";
export type HeadingFontStyle = "light" | "regular" | "semibold" | "bold";
export type ParagraphFontSize = "small" | "regular";

export const typographyColorsToTailwindClass = (
  color?: TypographyColors,
): string => {
  switch (color) {
    case "black":
      return "text-black";
    case "grey":
      return "text-gray-400";
    case "white":
      return "text-white";
    default:
      return "text-white";
  }
};

export const fontStyleToTailwindClass = (
  style?: HeadingFontStyle | ParagraphFontStyle,
): string => {
  switch (style) {
    case "light":
      return "font-light";
    case "regular":
      return "font-regular";
    case "semibold":
      return "font-semibold";
    case "bold":
      return "font-bold";
    default:
      return "font-regular";
  }
};

export const paragraphFontSizeToTailwindClass = (
  size?: ParagraphFontSize,
): string => {
  switch (size) {
    case "regular":
      return "text-web-paragraph md:text-mobile-paragraph";
    case "small":
      return "text-web-paragraph-small md:text-mobile-paragraph-small";
    default:
      return "text-web-paragraph md:text-mobile-paragraph";
  }
};
