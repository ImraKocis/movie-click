import React, { ReactElement } from 'react';
import Paragraph from '@/app/components/typography/Paragraph';
import FavoriteMovieCard from '@/app/components/navbar/components/FavoriteMovieCard';

export default function FavoritesDropdown(): ReactElement {
  return (
    <div className="absolute left-0 right-0 mt-4 w-full rounded bg-gray-800 p-4 opacity-0 transition-opacity delay-150 ease-in-out group-hover:visible group-hover:opacity-100">
      <div className="px-6 py-5">
        <div className="flex border-b border-gray-600 pb-2">
          <Paragraph
            text={'favorite movies'}
            color="gray"
            isAllCapital={true}
          />
        </div>
        <FavoriteMovieCard
          id={123}
          title={'Barbiehaimer'}
          year={'2023'}
          score={8.5555}
          posterUrl={'/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg'}
        />
      </div>
    </div>
  );
}
