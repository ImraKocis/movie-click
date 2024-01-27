'use client';
import React, { ReactElement } from 'react';
import Paragraph from '@/app/components/typography/Paragraph';
import { getScoreString } from '@/app/util/globalFunctions/formatStrings';
import { MovieDetails } from '@/app/lib/tmdb/movies/types/movieDetails';
import { useWindowWidthBreakpoint } from '@/app/hooks/useWindowWidth';
import { twMerge } from 'tailwind-merge';
import { formatDate } from '@/app/util/globalFunctions/formatDate';

interface MovieSimpleDetailsProps {
  movie: MovieDetails;
  hiddenOnMobile?: boolean;
  hiddenOnDesktop?: boolean;
}
export default function MovieSimpleDetails({
  movie,
  hiddenOnDesktop = false,
  hiddenOnMobile = false,
}: MovieSimpleDetailsProps): ReactElement {
  const brakePoint = useWindowWidthBreakpoint(1024);
  return (
    <div
      className={twMerge(
        'flex-col gap-6 divide-y-2 divide-gray-400',
        (!brakePoint && hiddenOnDesktop) || (brakePoint && hiddenOnMobile)
          ? 'hidden'
          : 'flex'
      )}
    >
      {movie.vote_average && movie.vote_average != 0 ? (
        <div className="mt-6">
          <Paragraph text="score" color="gray" isAllCapital />
          <Paragraph
            text={getScoreString(movie.vote_average, movie.vote_count)}
            color="white"
          />
        </div>
      ) : null}
      <div>
        <div className="mt-6">
          <Paragraph text="genres" color="gray" isAllCapital />
          <Paragraph
            text={movie.genres
              ?.map((genre, index) => {
                if (index == 0) return genre.name;
                return ` ${genre.name}`;
              })
              .toString()}
            color="white"
          />
        </div>
      </div>
      <div>
        <div className="mt-6">
          <Paragraph
            text={
              movie.production_countries?.length > 1
                ? 'production countries'
                : 'production country'
            }
            color="gray"
            isAllCapital
          />
          <Paragraph
            text={movie.production_countries
              ?.map((country, index) => {
                if (index == 0) return country.name;
                return ` ${country.name}`;
              })
              .toString()}
            color="white"
          />
        </div>
      </div>
      <div>
        <div className="mt-6">
          <Paragraph text={'release date'} isAllCapital color="gray" />
          <Paragraph text={formatDate(movie.release_date)} />
        </div>
      </div>
    </div>
  );
}
