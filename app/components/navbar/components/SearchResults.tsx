import React, { ReactElement } from 'react';
import { MovieSearch } from '@/app/lib/tmdb/movies/types/movieSearch';
import Paragraph from '@/app/components/typography/Paragraph';
import SearchMovieGrid from '@/app/components/navbar/components/SearchMovieGrid';

interface SearchResultsProps {
  setIsSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
  movies?: MovieSearch;
}

export default function SearchResults({
  movies,
  setIsSearchActive,
}: SearchResultsProps): ReactElement {
  return (
    <div
      onMouseLeave={() => setIsSearchActive(false)}
      className="absolute left-0 right-0 w-full rounded-b bg-gray-800"
    >
      <div className="px-6 py-5">
        {!movies ? (
          <div className="flex text-gray-400">
            Type something to search movies...
          </div>
        ) : null}
        {movies ? (
          <>
            {movies.total_results > 0 ? (
              <>
                <div className="border-b border-gray-600 pb-2">
                  <Paragraph text="movies" color="gray" isAllCapital={true} />
                </div>
                <SearchMovieGrid
                  movies={movies.results}
                  setIsSearchActive={setIsSearchActive}
                />
              </>
            ) : (
              <Paragraph text="No results, sorry" color="gray" />
            )}
          </>
        ) : null}
      </div>
    </div>
  );
}
