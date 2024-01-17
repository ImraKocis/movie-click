import React, { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import {
  ButtonProps,
  buttonStyleToTailwindClass,
} from '@/app/components/button/utils/buttonGlobalPropertiesAndFunctions';

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
        'flex items-center justify-center gap-4 px-8 py-6',
        buttonStyleToTailwindClass(style, isDisabled)
      )}
      disabled={isDisabled}
      onClick={onClick}
    >
      <>{iconBefore}</>
      {isAllCapital ? text.toUpperCase() : text}
    </button>
  );
}
