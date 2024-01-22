import React, { ReactElement, Suspense } from 'react';
import MoviesInfiniteScroll from '@/app/components/movies/MoviesInfiniteScroll';
import Paragraph from '@/app/components/typography/Paragraph';
import MoviesFilter from '@/app/components/movies/MoviesFilter';

export default function PopularMoviesPage(): ReactElement {
  return (
    <div className="relative flex flex-col items-center bg-transparent">
      <div className="relative flex w-full max-w-wrapper--desktop flex-col px-6">
        <div className="mb-8">
          <Paragraph
            text="We're glad you're here! Discover the cinematic magic with MoveClick, your ultimate destination for the hottest and most beloved movies in your region. Browse through our curated list of popular films and immerse yourself in the world of entertainment."
            color="white"
          />
        </div>
        {/*TODO - implement UI for loading*/}
        <Suspense
          fallback={
            <div className="flex w-full items-center justify-center bg-red-500 py-8 text-white">
              LOADING
            </div>
          }
        >
          <MoviesInfiniteScroll />
        </Suspense>
      </div>
    </div>
  );
}
