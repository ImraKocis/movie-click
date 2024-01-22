import React from 'react';
import MoviesInfiniteScroll from '@/app/components/movies/MoviesInfiniteScroll';
import MovieImageCard from '@/app/components/movies/MovieImageCard';
import MovieSlider from '@/app/components/movies/MovieSlider';
import { getPopularMovies } from '@/app/actions/movies/actions';

export default async function MoviesPage() {
  const popularMovies = await getPopularMovies({ pageParam: 1 });
  const movies = popularMovies.results.splice(0, 10);
  return (
    <div className="relative flex flex-col items-center bg-transparent">
      <div className="relative flex w-full max-w-wrapper--desktop flex-col px-4">
        <div className="mb-6">
          <MovieSlider>
            {movies.map((movie, index) => (
              <div className="flex" key={index}>
                <MovieImageCard
                  id={movie.id}
                  movieNumber={index + 1}
                  movieImageUrl={movie.poster_path}
                  movieTitle={movie.title}
                />
              </div>
            ))}
          </MovieSlider>
        </div>
      </div>
    </div>
  );
}
