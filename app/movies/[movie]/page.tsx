import BackgroundImageContainer from '@/app/components/movies/containers/BackgroundImageContainer';
import {
  getMovieDetails,
  getMovieSimilarMovies,
} from '@/app/actions/movies/actions';
import MovieDetailCard from '@/app/components/movies/MovieDetailCard';
import YouTubeVideo from '@/app/components/movies/YouTubeVideo';

interface SearchParams {
  searchParams: {
    movieId: number;
  };
}

export default async function MovieDetailsPage({ searchParams }: SearchParams) {
  const movie = await getMovieDetails(searchParams.movieId);
  const similar = await getMovieSimilarMovies(searchParams.movieId);
  const trailerKey = movie.videos?.results.filter(
    (video) => video.type === 'Trailer'
  )[0].key;
  return (
    <BackgroundImageContainer
      backgroundImage={movie.backdrop_path}
      blurImage={false}
      fulSizeImage={false}
    >
      <YouTubeVideo trailerKey={trailerKey} />
      <MovieDetailCard movie={movie} similar={similar} />
    </BackgroundImageContainer>
  );
}
