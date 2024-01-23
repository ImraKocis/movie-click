import React, { ReactElement, ReactNode } from 'react';
import Heading from '@/app/components/typography/Heading';
import Paragraph from '@/app/components/typography/Paragraph';

interface MoviesSliderGridContainerProps {
  children: ReactNode;
  headingText?: string;
  paragraphText?: string;
}
export default function MovieSliderGridContainer({
  children,
  paragraphText,
  headingText,
}: MoviesSliderGridContainerProps): ReactElement {
  return (
    <div className="mb-6 flex flex-col xl:grid xl:grid-cols-5 2xl:grid-cols-6">
      <div className="flex min-w-40 flex-col gap-4">
        {headingText ? <Heading text={headingText} level="h2" /> : null}
        {paragraphText ? <Paragraph text={paragraphText} color="gray" /> : null}
      </div>
      <div className="xl:col-span-4 2xl:col-span-5">{children}</div>
    </div>
  );
}
