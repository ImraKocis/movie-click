import React, { ReactElement } from 'react';
import Paragraph from '@/app/components/typography/Paragraph';
import FavoriteMovieGridClientWrapper from '@/app/components/navbar/components/FavoriteMovieGridClientWrapper';

export default function FavoritesDropdown(): ReactElement {
  return (
    <div className="absolute left-0 right-0 z-[99] hidden w-full rounded bg-gray-800 p-4 group-hover:block">
      <div className="px-6 py-5">
        <div className="flex border-b border-gray-600 pb-2">
          <Paragraph text="favorite movies" color="gray" isAllCapital={true} />
        </div>
        <FavoriteMovieGridClientWrapper />
      </div>
    </div>
  );
}
