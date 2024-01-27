import { MovieDetails } from '@/app/lib/tmdb/movies/types/movieDetails';
import { ReactElement } from 'react';
import Image from 'next/image';
import {
  ImageUrlBuilder,
  logoSizes,
  posterSizes,
} from '@/app/lib/tmdb/utils/images/imagesConfiguration';
import Paragraph from '@/app/components/typography/Paragraph';
import Heading from '@/app/components/typography/Heading';
import { twMerge } from 'tailwind-merge';
import React from 'react';
import { MovieLists } from '@/app/lib/tmdb/movies/types/movieLists';
import MovieSlider from '@/app/components/movies/containers/MovieSlider';
import MovieImageCard from '@/app/components/movies/MovieImageCard';
import MovieSliderContainer from '@/app/components/movies/containers/MovieSliderContainer';
import FavoriteButton from '@/app/components/button/FavoriteButton';
import MovieSimpleDetails from '@/app/components/movies/MovieSimpleDetails';

export interface MovieDetailCardProps {
  movie: MovieDetails;
  similar: MovieLists;
}

export default function MovieDetailCard({
  movie,
  similar,
}: MovieDetailCardProps): ReactElement {
  const imageFullUrl = new ImageUrlBuilder()
    .setImageUrl(movie.poster_path)
    .setImageSize('original')
    .setSizeConfig(posterSizes)
    .build();
  return (
    <div className="mx-auto flex w-full max-w-movie-detail-card flex-col-reverse rounded-xl bg-gray-900 p-6 lg:flex-row">
      <div className="flex w-full flex-col gap-6 divide-y-2 divide-gray-400 px-2 max-lg:items-center lg:basis-1/3">
        <div className="relative max-w-[360px]">
          <Image
            src={imageFullUrl}
            alt={`${movie.title} poster`}
            className="w-full rounded-xl"
            width={350}
            height={550}
          />
          <div className="absolute bottom-5 right-5">
            <FavoriteButton
              movie={{
                id: movie.id,
                title: movie.title,
                releaseDate: movie.release_date,
                posterUrl: movie.poster_path,
                score: movie.vote_average,
              }}
            />
          </div>
        </div>
        <MovieSimpleDetails movie={movie} hiddenOnMobile={true} />
      </div>
      <div className="relative w-full px-4 lg:basis-2/3">
        <div className="mb-12 flex flex-col">
          <div
            className={twMerge(
              movie.title === movie.original_title ? 'mb-6' : 'mb-12'
            )}
          >
            <Heading text={movie.title} level="h1" color="white" />
          </div>
          {movie.title !== movie.original_title ? (
            <div className="mb-12">
              <Paragraph text="Original title" isAllCapital color="gray" />
              <Heading level="h3" text={movie.original_title} color="gray" />
            </div>
          ) : null}
          <div className="mb-12">
            <Paragraph text={movie.overview} color="gray" />
          </div>
          <div className="mb-12 flex flex-col gap-6">
            <Paragraph
              text={
                movie.production_companies?.length > 1
                  ? 'Production companies'
                  : 'Production company'
              }
              isAllCapital
              color="gray"
            />
            <div className="flex w-full items-center gap-4">
              {movie.production_companies
                ?.filter((company) => company.logo_path !== null)
                ?.map((company, index) => (
                  <React.Fragment key={index}>
                    <div className="flex h-full max-w-[108px]">
                      <Image
                        src={new ImageUrlBuilder()
                          .setImageUrl(company.logo_path)
                          .setImageSize('large')
                          .setSizeConfig(logoSizes)
                          .build()}
                        alt={company.name}
                        width={108}
                        height={108}
                      />
                    </div>
                  </React.Fragment>
                ))}
            </div>
          </div>
          <MovieSimpleDetails movie={movie} hiddenOnDesktop={true} />
          <div className="relative flex flex-col">
            <Paragraph text={'similar'} isAllCapital color="gray" />
            <MovieSliderContainer>
              <MovieSlider>
                {similar.results
                  ?.filter((movie) => movie.poster_path !== null)
                  ?.map((movie) => (
                    <React.Fragment key={movie.id}>
                      <MovieImageCard
                        id={movie.id}
                        movieImageUrl={movie.poster_path}
                        movieTitle={movie.title}
                        movieScore={movie.vote_average}
                        movieReleaseDate={movie.release_date}
                      />
                    </React.Fragment>
                  ))}
              </MovieSlider>
            </MovieSliderContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
