'use client';

import React, { ReactElement, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectLocalStorage } from '@/app/lib/redux/features/localStorage/localStorageSlice';
import { useWindowWidthBreakpoint } from '@/app/hooks/useWindowWidth';
import { IoIosArrowDown } from 'react-icons/io';
import Paragraph from '@/app/components/typography/Paragraph';
import FavoritesDropdown from '@/app/components/navbar/components/FavoritesDropdown';
import { twMerge } from 'tailwind-merge';

export default function FavoriteDropdownClientWrapper(): ReactElement {
  const favoriteMovies = useSelector(selectLocalStorage);
  const activeOnClick = useWindowWidthBreakpoint(1280);
  const [isFavoriteOpen, setIsFavoriteOpen] = useState(!activeOnClick);
  return (
    <div className="group block basis-1/2 md:relative md:h-10">
      <button
        className="pointer-events-auto flex h-full items-center gap-1 text-gray-400"
        onClick={() =>
          activeOnClick ? setIsFavoriteOpen((prev) => !prev) : null
        }
      >
        <IoIosArrowDown
          className={twMerge(
            'transition delay-150 xl:group-hover:rotate-180 xl:group-hover:text-white',
            activeOnClick && isFavoriteOpen ? 'rotate-180 text-white' : ''
          )}
        />
        <Paragraph
          text="Favorites"
          color={activeOnClick && isFavoriteOpen ? 'white' : 'gray'}
          size="regular"
          changeColorOnHover={!activeOnClick}
          isPartOfCssGroup={!activeOnClick}
        />
      </button>
      {activeOnClick ? (
        isFavoriteOpen ? (
          <FavoritesDropdown
            isFavoriteOpen={isFavoriteOpen}
            favoriteMovies={favoriteMovies}
            setIsFavoriteOpen={setIsFavoriteOpen}
            activeOnClick={activeOnClick}
          />
        ) : null
      ) : (
        <FavoritesDropdown
          isFavoriteOpen={isFavoriteOpen}
          favoriteMovies={favoriteMovies}
          setIsFavoriteOpen={setIsFavoriteOpen}
          activeOnClick={activeOnClick}
        />
      )}
    </div>
  );
}
