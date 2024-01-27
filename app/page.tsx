import Heading from '@/app/components/typography/Heading';
import React, { ReactElement, Suspense } from 'react';
import LinkButton from '@/app/components/button/LinkButton';
import Paragraph from '@/app/components/typography/Paragraph';
import {
  getMoviesWithParams,
  getPopularMovies,
  getUpcomingMovies,
} from '@/app/actions/movies/actions';
import MovieSlider from '@/app/components/movies/containers/MovieSlider';
import BackgroundImageContainer from '@/app/components/movies/containers/BackgroundImageContainer';
import MovieSliderGridContainer from '@/app/components/movies/containers/MovieSliderGridContainer';
import MovieImageCard from '@/app/components/movies/MovieImageCard';
import Loading from '@/app/loading';

export default async function Home(): Promise<ReactElement> {
  const upcomingMovies = await getUpcomingMovies();
  const popularMovies = await getPopularMovies();
  const mustWatchMovies = await getMoviesWithParams({
    onlyBestMoves: true,
    sortBy: 'vote_average.desc',
  });

  return (
    <Suspense fallback={<Loading />}>
      <BackgroundImageContainer>
        <div className="mb-24 flex h-52 flex-col justify-center gap-12 text-center">
          <div className="flex h-full flex-col justify-center gap-8">
            <Heading
              text="MoveClick, Your movie guide"
              level="h1"
              color="white"
            />
            <Paragraph
              text="With MoveClick, find and discover popular movies."
              color="gray"
            />
          </div>
          <div className="flex justify-center">
            <LinkButton text="Discover movies" style="primary" link="/movies" />
          </div>
        </div>

        <MovieSliderGridContainer
          headingText="Must watch"
          paragraphText="Discover cinematic excellence with MoveClick's top-rated movies, showcasing the most critically acclaimed and beloved films. Immerse yourself in the best of storytelling, performances, and visuals as you explore our curated selection of cinematic masterpieces."
        >
          <MovieSlider>
            {mustWatchMovies.results?.map((movie) => (
              <React.Fragment key={movie.id}>
                <MovieImageCard
                  id={movie.id}
                  movieImageUrl={movie.poster_path}
                  movieTitle={movie.title}
                  movieScore={movie.vote_average}
                  movieReleaseDate={movie.release_date}
                  activateFavoriteButton={false}
                />
              </React.Fragment>
            ))}
          </MovieSlider>
        </MovieSliderGridContainer>
        <MovieSliderGridContainer
          headingText="Movies comming soon"
          paragraphText="Get a sneak peek into the future of cinema with MoveClick's curated list of upcoming movies. Stay ahead of the curve and anticipate the next big releases, ensuring you're among the first to experience the excitement of the latest and most anticipated films."
        >
          <MovieSlider>
            {upcomingMovies.results
              ?.filter((movie) => movie.poster_path !== null)
              ?.map((movie) => (
                <React.Fragment key={movie.id}>
                  <MovieImageCard
                    id={movie.id}
                    movieImageUrl={movie.poster_path}
                    movieTitle={movie.title}
                    movieScore={movie.vote_average}
                    movieReleaseDate={movie.release_date}
                    activateFavoriteButton={false}
                  />
                </React.Fragment>
              ))}
          </MovieSlider>
        </MovieSliderGridContainer>
        <div className="mb-24">
          <MovieSliderGridContainer
            headingText="Most popular on our platform"
            paragraphText="Dive into the buzz and excitement surrounding the hottest films of the moment on MoveClick's popular movies page. Discover what's captivating audiences and trending in your region, and join the cinematic conversation with our curated collection of blockbuster hits."
          >
            <MovieSlider>
              {popularMovies.results.map((movie) => (
                <React.Fragment key={movie.id}>
                  <MovieImageCard
                    id={movie.id}
                    movieImageUrl={movie.poster_path}
                    movieTitle={movie.title}
                    movieScore={movie.vote_average}
                    movieReleaseDate={movie.release_date}
                    activateFavoriteButton={false}
                  />
                </React.Fragment>
              ))}
            </MovieSlider>
          </MovieSliderGridContainer>
        </div>
        <div className="flex flex-col items-center gap-6 py-12 text-center">
          <Heading
            text="Try more filters and find your perfect move match"
            level="h2"
            color="gray"
          />
          <div className="flex">
            <LinkButton
              link="/movies/popular"
              text="Popular movies"
              style="secondary"
            />
          </div>
        </div>
      </BackgroundImageContainer>
    </Suspense>
  );
}
