import React, { ReactElement } from 'react';
import FavoriteMovieCard from '@/app/components/navbar/components/FavoriteMovieCard';
import { LocalStorageFavorites } from '@/app/lib/localStorage/types';

export interface FavoriteMovieGridProps {
  movies?: LocalStorageFavorites[];
}

export default function FavoriteMovieGrid({
  movies,
}: FavoriteMovieGridProps): ReactElement {
  return (
    <div className="full-w mt-4 grid gap-4 border-b border-gray-600 pb-4">
      {movies?.map((movie, index) => (
        <React.Fragment key={index}>
          <FavoriteMovieCard
            id={parseInt(movie.id)}
            posterUrl={movie.posterUrl}
            title={movie.title}
            score={parseFloat(movie.score)}
            year={movie.year}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
