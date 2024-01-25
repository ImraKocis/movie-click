import React from 'react';
import MovieNumberImageCard from '@/app/components/movies/MovieNumberImageCard';
import MovieSlider from '@/app/components/movies/containers/MovieSlider';
import {
  getNewestMovies,
  getMoviesWithParams,
} from '@/app/actions/movies/actions';
import MovieImageCard from '@/app/components/movies/MovieImageCard';
import Paragraph from '@/app/components/typography/Paragraph';
import MovieSliderGridContainer from '@/app/components/movies/containers/MovieSliderGridContainer';
import LinkButton from '@/app/components/button/LinkButton';

export default async function MoviesPage() {
  const popularMovies = await getMoviesWithParams({
    pageParam: 1,
    onlyBestMoves: true,
  });
  const newMovies = await getNewestMovies();
  const actionMovies = await getMoviesWithParams({
    genres: '28',
    onlyBestMoves: true,
  });
  const horrorMovies = await getMoviesWithParams({
    genres: '27',
    onlyBestMoves: true,
  });
  const comedyMovies = await getMoviesWithParams({
    genres: '35',
    onlyBestMoves: true,
  });
  const crimeMovies = await getMoviesWithParams({
    genres: '80',
    onlyBestMoves: true,
  });
  return (
    <div className="relative flex flex-col items-center bg-transparent">
      <div className="relative mt-56 flex w-full max-w-wrapper--desktop flex-col gap-10 px-4 xl:mt-32">
        <MovieSliderGridContainer headingText="Top 10 in Croatia">
          <MovieSlider>
            {popularMovies.results.splice(0, 10).map((movie, index) => (
              <div className="flex" key={index}>
                <MovieNumberImageCard
                  id={movie.id}
                  movieReleaseDate={movie.release_date}
                  movieScore={movie.vote_average}
                  movieNumber={index + 1}
                  movieImageUrl={movie.poster_path}
                  movieTitle={movie.title}
                />
              </div>
            ))}
          </MovieSlider>
        </MovieSliderGridContainer>
        <MovieSliderGridContainer
          headingText="Newest Movies"
          paragraphText="Stay on the cutting edge of cinema with MoveClick's latest additions, featuring the newest movies that have just hit the screens. Explore a world of fresh stories, dazzling visuals, and captivating performances in our ever-growing collection of the latest releases."
        >
          <MovieSlider>
            {newMovies.results.splice(0, 10).map((movie, index) => (
              <div className="flex" key={index}>
                <MovieImageCard
                  id={movie.id}
                  movieReleaseDate={movie.release_date}
                  movieScore={movie.vote_average}
                  movieImageUrl={movie.poster_path}
                  movieTitle={movie.title}
                />
              </div>
            ))}
          </MovieSlider>
        </MovieSliderGridContainer>
        <MovieSliderGridContainer
          headingText="Action Movies"
          paragraphText="Dive into heart-pounding excitement with our action-packed movie selection on MoveClick, where every pulse-pounding moment and adrenaline-fueled scene awaits to captivate action movie enthusiasts."
        >
          <MovieSlider>
            {actionMovies.results.splice(0, 10).map((movie, index) => (
              <div className="flex" key={index}>
                <MovieImageCard
                  id={movie.id}
                  movieReleaseDate={movie.release_date}
                  movieScore={movie.vote_average}
                  movieImageUrl={movie.poster_path}
                  movieTitle={movie.title}
                />
              </div>
            ))}
          </MovieSlider>
        </MovieSliderGridContainer>
        <MovieSliderGridContainer
          headingText="Horror Movies"
          paragraphText="Brace yourself for a spine-chilling experience as MoveClick brings you a handpicked selection of the most hair-raising and bone-chilling horror movies, guaranteed to keep you on the edge of your seat."
        >
          <MovieSlider>
            {horrorMovies.results.splice(0, 10).map((movie, index) => (
              <div className="flex" key={index}>
                <MovieImageCard
                  id={movie.id}
                  movieReleaseDate={movie.release_date}
                  movieScore={movie.vote_average}
                  movieImageUrl={movie.poster_path}
                  movieTitle={movie.title}
                />
              </div>
            ))}
          </MovieSlider>
        </MovieSliderGridContainer>
        <MovieSliderGridContainer
          headingText="Comedy Movies"
          paragraphText="Get ready to burst into laughter with MoveClick's hilarious comedy movie lineup. From timeless classics to the latest gut-busting releases, our collection promises a joyous escape into the world of humor and fun."
        >
          <MovieSlider>
            {comedyMovies.results.splice(0, 10).map((movie, index) => (
              <div className="flex" key={index}>
                <MovieImageCard
                  id={movie.id}
                  movieReleaseDate={movie.release_date}
                  movieScore={movie.vote_average}
                  movieImageUrl={movie.poster_path}
                  movieTitle={movie.title}
                />
              </div>
            ))}
          </MovieSlider>
        </MovieSliderGridContainer>
        <MovieSliderGridContainer
          headingText="Crime Movies"
          paragraphText="Immerse yourself in the gritty underworld and suspenseful tales of our crime movie selection on MoveClick. From high-stakes heists to intense investigations, experience the pulse-pounding thrill of the criminal underworld."
        >
          <MovieSlider>
            {crimeMovies.results.splice(0, 10).map((movie, index) => (
              <div className="flex" key={index}>
                <MovieImageCard
                  id={movie.id}
                  movieReleaseDate={movie.release_date}
                  movieScore={movie.vote_average}
                  movieImageUrl={movie.poster_path}
                  movieTitle={movie.title}
                />
              </div>
            ))}
          </MovieSlider>
        </MovieSliderGridContainer>
        <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
          <Paragraph
            text="Find more filters on our Popular page"
            color="gray"
          />
          <LinkButton
            link={'/movies/popular'}
            text="Popular Movies"
            style="primary"
          />
        </div>
      </div>
    </div>
  );
}
