import React from 'react';
import MoviesInfiniteScroll from '@/app/components/movies/MoviesInfiniteScroll';

export default function MoviesPage() {
  return (
    <div className=" flex w-full flex-col">
      {/*<Paragraph text="test" color="gray" />*/}
      {/*<Heading text="test heading" level="h2" color="yellow" />*/}
      {/* eslint-disable-next-line react/jsx-no-undef */}
      {/*<Navbar />*/}
      <div className="z-10 h-24 w-full bg-gray-800">
        <MoviesInfiniteScroll />
      </div>
    </div>
  );
}
