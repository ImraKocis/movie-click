'use client';
import { useInfiniteQuery } from '@tanstack/react-query';
import { getMoviesWithParams } from '@/app/actions/movies/actions';
import { useInView } from 'react-intersection-observer';
import React, { ReactElement, useEffect, useState } from 'react';
import MovieImage from '@/app/components/movies/MovieImage';
import MoviesFilter from '@/app/components/movies/MoviesFilter';
import Paragraph from '@/app/components/typography/Paragraph';
import { IoIosArrowDown } from 'react-icons/io';
import { twMerge } from 'tailwind-merge';
import { Spinner } from '@nextui-org/spinner';
import Button from '@/app/components/button/Button';
import { notFound } from 'next/navigation';

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
  const { data, error, fetchNextPage, isFetching, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['favoriteMovies', year, score, genre],
      queryFn: async ({ pageParam }) =>
        getMoviesWithParams({
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
  if (error) {
    console.log(
      'Error while api request in MoviesInfiniteScroll component',
      error.message
    );
    notFound();
  }

  const scrollToTop = () => {
    if (typeof window !== 'undefined') window.scrollTo(0, 0);
  };

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
            onClick={() => setIsFilterActive((prev) => !prev)}
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

          {isFilterActive ? (
            <MoviesFilter
              setYear={setYear}
              setGenre={setGenre}
              setScore={setSCore}
              setUiYear={setUiYear}
              setUiScore={setUiScore}
              setIsActive={setIsFilterActive}
              genre={genre}
              year={year}
              uiYear={uiYear}
              uiScore={uiScore}
            />
          ) : null}
        </div>
      </div>
      {isFetching && flattenedData.length == 0 ? (
        <div className="flex h-96 w-full items-center justify-center">
          <Spinner />
        </div>
      ) : (
        <div className="grid grid-cols-2 justify-items-center gap-3 bg-transparent sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
          {flattenedData.map((movie, index) => {
            if (flattenedData.length - 1 == index)
              return (
                <div ref={ref} key={index}>
                  <MovieImage
                    id={movie.id}
                    imageUrl={movie.poster_path}
                    title={movie.title}
                    year={movie.release_date}
                    score={movie.vote_average}
                  />
                </div>
              );
            return (
              <React.Fragment key={index}>
                <MovieImage
                  id={movie.id}
                  imageUrl={movie.poster_path}
                  title={movie.title}
                  year={movie.release_date}
                  score={movie.vote_average}
                />
              </React.Fragment>
            );
          })}
        </div>
      )}
      {flattenedData.length > 120 ? (
        <div className="fixed bottom-10 right-10 z-50">
          <Button
            text={'Scroll to Top'}
            style="primary"
            onClick={() => scrollToTop()}
            isAllCapital
          />
        </div>
      ) : null}
      {!hasNextPage && flattenedData.length > 0 ? (
        <div className="flex justify-center py-8 max-md:text-center">
          <Paragraph
            text="You have reach to the end of results, try to change filters to more results"
            color="gray"
          />
        </div>
      ) : null}
    </>
  );
}
