import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      maxWidth: {
        'wrapper--desktop': '1750px',
        'navbar--desktop': '900px',
      },
      fontWeight: {
        light: '300',
        regular: '400',
        semibold: '700',
        bold: '900',
      },
      fontSize: {
        'web-title-1': '2.5rem',
        'web-title-2': '1.75rem',
        'web-title-3': '1.5rem',
        'mobile-title-1': '1.75rem',
        'mobile-title-2': '1.5rem',
        'mobile-title-3': '1.25rem',
        'web-paragraph': '1.125rem',
        'web-paragraph-small': '.875rem',
        'mobile-paragraph': '1rem',
        'mobile-paragraph-small': '.875rem',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
export default config;
