'use client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getPopularMovies } from '@/app/actions/movies/actions';
import { useInView } from 'react-intersection-observer';
import React, { ReactElement, Suspense, useEffect, useState } from 'react';
import MovieImage from '@/app/components/movies/MovieImage';
import MoviesFilter from '@/app/components/movies/MoviesFilter';
import { number } from 'prop-types';
import { MovieGenresTypes } from '@/app/lib/tmdb/genres/types/genres';
import Paragraph from '@/app/components/typography/Paragraph';
import { IoIosArrowDown } from 'react-icons/io';
import { twMerge } from 'tailwind-merge';
import { MovieListsResultsProps } from '@/app/lib/tmdb/movies/types/movieLists';

export default function MoviesInfiniteScroll(): ReactElement {
  const [year, setYear] = useState<number[]>([1900, new Date().getFullYear()]);
  const [score, setSCore] = useState<number>(1);
  const [genre, setGenre] = useState<number[]>([]);
  const [uiYear, setUiYear] = useState<number[]>([
    1900,
    new Date().getFullYear(),
  ]);
  const [uiScore, setUiScore] = useState<number>(1);
  const [isFilterActive, setIsFilterActive] = useState<boolean>(false);
  const { ref, inView } = useInView();
  const { data, error, fetchNextPage } = useInfiniteQuery({
    queryKey: ['favoriteMovies', year, score, genre],
    queryFn: async ({ pageParam }) =>
      getPopularMovies({
        pageParam,
        year: year.map((y) => y.toString()),
        genres: genre.toString(),
        score,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage) => {
      if (lastPage.page <= lastPage.total_pages) return lastPage.page + 1;
      return undefined;
    },
  });

  if (error) console.log(error.message);

  // const handleFilters = () => {
  //   setFilteredData(flattenData?.filter(filterMovies));
  // };
  //
  // const filterMovies = (movie: MovieListsResultsProps): boolean => {
  //   if (genre.length == 0) {
  //     return (
  //       new Date(movie.release_date.slice(0, 4)).getTime() >
  //         new Date(year[0].toString()).getTime() &&
  //       new Date(movie.release_date.slice(0, 4)).getTime() <
  //         new Date(year[1].toString()).getTime() &&
  //       movie.vote_average >= score
  //     );
  //   }
  //   return (
  //     new Date(movie.release_date.slice(0, 4)).getTime() >
  //       new Date(year[0].toString()).getTime() &&
  //     new Date(movie.release_date.slice(0, 4)).getTime() <
  //       new Date(year[1].toString()).getTime() &&
  //     movie.genre_ids.some((g) => genre.includes(g)) &&
  //     movie.vote_average >= score
  //   );
  // };

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  const flattenedData = data?.pages.flatMap((page) => page.results) ?? [];

  return (
    <>
      <div className="relative block w-full py-5">
        <div className="relative">
          <button
            className="pointer-events-auto flex w-fit items-center gap-2"
            onClick={() => setIsFilterActive(true)}
          >
            <Paragraph
              text={'filters'}
              isAllCapital={true}
              color={isFilterActive ? 'white' : 'gray'}
            />
            <IoIosArrowDown
              className={twMerge(
                isFilterActive ? 'rotate-180 text-white' : 'text-gray-400',
                'transition delay-150'
              )}
            />
          </button>
          <Suspense fallback={'...loading'}>
            {isFilterActive ? (
              <MoviesFilter
                setYear={setYear}
                setGenre={setGenre}
                setScore={setSCore}
                setUiYear={setUiYear}
                setUiScore={setUiScore}
                setIsActive={setIsFilterActive}
                genre={genre}
                uiYear={uiYear}
                uiScore={uiScore}
              />
            ) : null}
          </Suspense>
        </div>
      </div>
      <div className="grid grid-cols-2 justify-items-center gap-3 bg-transparent sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
        {flattenedData?.map((movie, index) => {
          if (flattenedData?.length - 1 == index)
            // TODO - Try to optimise new page fetching
            return (
              <div ref={ref} key={index}>
                <MovieImage
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.title}
                />
              </div>
            );
          return (
            <React.Fragment key={index}>
              <MovieImage
                id={movie.id}
                imageUrl={movie.poster_path}
                title={movie.title}
              />
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}
