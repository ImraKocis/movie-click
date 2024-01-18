'use client';

import React, { ReactElement } from 'react';
import { useSelector } from 'react-redux';
import { selectLocalStorage } from '@/app/lib/redux/features/localStorage/localStorageSlice';
import FavoriteMovieGrid from '@/app/components/navbar/components/FavoriteMovieGrid';

export default function FavoriteMovieGridClientWrapper(): ReactElement {
  const favoriteMovies = useSelector(selectLocalStorage);
  return (
    <>
      <FavoriteMovieGrid movies={favoriteMovies} />
    </>
  );
}
