import React, { ReactElement, ReactNode } from 'react';
import Heading from '@/app/components/typography/Heading';
import Paragraph from '@/app/components/typography/Paragraph';

interface MoviesSliderGridContainerProps {
  children: ReactNode;
}
export default function MovieSliderContainer({
  children,
}: MoviesSliderGridContainerProps): ReactElement {
  return (
    <div className="mb-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      <div className="col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 2xl:col-span-6">
        {children}
      </div>
    </div>
  );
}
