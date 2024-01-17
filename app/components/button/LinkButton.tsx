import React, { ReactElement } from 'react';
import { twMerge } from 'tailwind-merge';
import {
  ButtonProps,
  buttonStyleToTailwindClass,
} from '@/app/components/button/utils/buttonGlobalPropertiesAndFunctions';
import Link from 'next/link';

export interface LinkButtonProps extends ButtonProps {
  link: string;
  movieId?: number;
}

export default function LinkButton({
  text,
  link,
  movieId,
  style,
  isDisabled,
  isAllCapital,
  iconBefore,
}: LinkButtonProps): ReactElement {
  return (
    <Link
      className={twMerge(
        'flex items-center justify-center gap-4 px-8 py-6',
        buttonStyleToTailwindClass(style, isDisabled)
      )}
      aria-disabled={isDisabled}
      href={
        movieId
          ? {
              pathname: link,
              query: { movieId: movieId },
            }
          : link
      }
    >
      <>{iconBefore}</>
      {isAllCapital ? text.toUpperCase() : text}
    </Link>
  );
}
