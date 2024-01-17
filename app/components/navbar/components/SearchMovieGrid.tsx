import React, { ReactElement } from 'react';
import { MovieSearchResults } from '@/app/lib/tmdb/movies/types/movieSearch';
import SearchMovieCard from '@/app/components/navbar/components/SearchMovieCard';

export interface SearchMovieGridProps {
  movies?: MovieSearchResults[];
  setIsSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchMovieGrid({
  movies,
  setIsSearchActive,
}: SearchMovieGridProps): ReactElement {
  const filteredMovies = movies
    ?.filter((movie) => movie.poster_path != null)
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 4);
  return (
    <div className="full-w mt-4 grid grid-rows-4 gap-4 border-b border-gray-600 pb-4">
      {filteredMovies?.map((movie, index) => (
        <React.Fragment key={index}>
          <SearchMovieCard
            id={movie.id}
            posterUrl={movie.poster_path}
            title={movie.title}
            year={new Date(movie.release_date).getFullYear().toString()}
            setIsSearchActive={setIsSearchActive}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
