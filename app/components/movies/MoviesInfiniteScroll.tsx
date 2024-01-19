'use client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getPopularMovies } from '@/app/actions/movies/actions';
import { useInView } from 'react-intersection-observer';
import React, { ReactElement, useEffect } from 'react';

export default function MoviesInfiniteScroll(): ReactElement {
  const { ref, inView } = useInView();
  const { data, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ['favoriteMovies'],
    queryFn: async ({ pageParam }) => getPopularMovies({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page <= lastPage.total_pages) return lastPage.page + 1;
      return undefined;
    },
  });

  if (error) console.log(error.message);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const flattenData = data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <div className="bg-white text-black">
      {flattenData?.map((movie, index) => {
        if (flattenData.length - 1 == index)
          return (
            <h1 key={index} ref={ref}>
              {movie.title}
            </h1>
          );
        return <h1 key={index}>{movie.title}</h1>;
      })}
    </div>
  );
}
