import React, { ReactElement, Suspense } from 'react';
import MoviesInfiniteScroll from '@/app/components/movies/MoviesInfiniteScroll';
import Paragraph from '@/app/components/typography/Paragraph';

export default function PopularMoviesPage(): ReactElement {
  return (
    <div className="flex h-full flex-col items-center bg-transparent">
      <div className="flex h-full w-full max-w-wrapper--desktop flex-col px-6">
        <div className="mb-8">
          <Paragraph
            text="We're glad you're here! Discover the cinematic magic with MoveClick, your ultimate destination for the hottest and most beloved movies in your region. Browse through our curated list of popular films and immerse yourself in the world of entertainment."
            color="white"
          />
        </div>
        {/*TODO - implement UI for loading*/}

        <MoviesInfiniteScroll />
      </div>
    </div>
  );
}
