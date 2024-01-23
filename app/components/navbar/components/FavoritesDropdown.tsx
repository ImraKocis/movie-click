import React, { ReactElement } from 'react';
import Paragraph from '@/app/components/typography/Paragraph';
import { IoMdClose } from 'react-icons/io';
import FavoriteMovieGrid from '@/app/components/navbar/components/FavoriteMovieGrid';
import { LocalStorageFavorites } from '@/app/lib/localStorage/types';
import { twMerge } from 'tailwind-merge';

interface FavoritesDropdownProps {
  setIsFavoriteOpen: React.Dispatch<React.SetStateAction<boolean>>;
  favoriteMovies: LocalStorageFavorites[];
  activeOnClick: boolean;
  isFavoriteOpen: boolean;
}

export default function FavoritesDropdown({
  setIsFavoriteOpen,
  favoriteMovies,
  activeOnClick,
  isFavoriteOpen,
}: FavoritesDropdownProps): ReactElement {
  return (
    <div
      className={twMerge(
        'absolute left-0 right-0 z-[99] w-full rounded bg-gray-800 p-4 ',
        activeOnClick && isFavoriteOpen
          ? 'block'
          : 'hidden xl:group-hover:block'
      )}
    >
      <div className="px-6 py-5">
        <div className="flex justify-between border-b border-gray-600 pb-2">
          <Paragraph text="favorite movies" color="gray" isAllCapital={true} />
          <button
            className="pointer-events-auto text-gray-400 disabled:opacity-0"
            disabled={!activeOnClick}
          >
            <IoMdClose
              onClick={() => (activeOnClick ? setIsFavoriteOpen(false) : null)}
            />
          </button>
        </div>
        {favoriteMovies.length > 0 ? (
          <FavoriteMovieGrid movies={favoriteMovies} />
        ) : (
          <div className="mt-4">
            <Paragraph text={'Your favorite list is empty'} color="gray" />
          </div>
        )}
      </div>
    </div>
  );
}
