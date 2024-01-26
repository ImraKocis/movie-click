'use server';
import { MovieLists } from '@/app/lib/tmdb/movies/types/movieLists';
import {
  formatDateForApi,
  getDateForApiInFuture,
} from '@/app/util/globalFunctions/formatDate';
import { MovieDetails } from '@/app/lib/tmdb/movies/types/movieDetails';

export async function getMoviesWithParams({
  pageParam = 1,
  year = ['1900', new Date().getFullYear().toString()],
  genres = '',
  score = 1,
  onlyBestMoves = false,
  sortBy = 'popularity.desc',
  useCustomVoteCount = false,
  customVoteCount = '1000',
}): Promise<MovieLists> {
  const url = process.env.API_BASE_URL;
  const token = process.env.API_TOKEN;
  const today = formatDateForApi(new Date());
  const voteCount = onlyBestMoves ? '1000' : '300';
  const response = await fetch(
    `${url}/discover/movie?` +
      new URLSearchParams({
        'primary_release_date.gte': `${year[0]}-01-01`,
        'primary_release_date.lte':
          year[1] == '2024' ? `${today}` : `${year[1]}-12-31`,
        'vote_average.gte': score.toString(),
        'vote_average.lte': '10',
        'vote_count.gte':
          year[0] == '2024'
            ? '10'
            : useCustomVoteCount
              ? customVoteCount
              : voteCount,
        with_genres: genres.replaceAll(',', '|'),
        include_adult: 'false',
        sort_by: sortBy,
        language: 'en-US',
        page: pageParam.toString(),
      }),
    {
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }
  );
  if (!response.ok) {
    console.log('Response if error', await response.json());
    throw new Error('getMoviesWithParams api call error');
  }
  return await response.json();
}

export async function getNewestMovies(): Promise<MovieLists> {
  const url = process.env.API_BASE_URL;
  const token = process.env.API_TOKEN;
  const response = await fetch(
    `${url}/movie/now_playing?` +
      new URLSearchParams({
        language: 'en-US',
        page: '1',
      }),
    {
      headers: { accept: 'application/json', Authorization: `Bearer ${token}` },
    }
  );
  if (!response.ok) {
    console.log('Response if error', await response.json());
    throw new Error('getNewestMovies api call error');
  }
  return await response.json();
}

export async function getUpcomingMovies(): Promise<MovieLists> {
  const url = process.env.API_BASE_URL;
  const token = process.env.API_TOKEN;
  const response = await fetch(
    `${url}/discover/movie?` +
      new URLSearchParams({
        language: 'en-US',
        'primary_release_date.gte': getDateForApiInFuture(10),
        page: '1',
      }),
    {
      headers: { accept: 'application/json', Authorization: `Bearer ${token}` },
    }
  );
  if (!response.ok) {
    console.log('Response if error', await response.json());
    throw new Error('getUpcomingMovies api call error');
  }
  return await response.json();
}

export async function getPopularMovies(): Promise<MovieLists> {
  const url = process.env.API_BASE_URL;
  const token = process.env.API_TOKEN;

  const response = await fetch(
    `${url}/movie/popular?` +
      new URLSearchParams({
        language: 'en-US',
        page: '1',
      }),
    {
      headers: { accept: 'application/json', Authorization: `Bearer ${token}` },
    }
  );
  if (!response.ok) {
    console.log('Response if error', await response.json());
    throw new Error('getPopularMovies api call error');
  }
  return await response.json();
}

export async function getMovieDetails(movieId = 0): Promise<MovieDetails> {
  const url = process.env.API_BASE_URL;
  const token = process.env.API_TOKEN;

  const response = await fetch(
    `${url}/movie/${movieId}?` +
      new URLSearchParams({
        language: 'en-US',
        page: '1',
        append_to_response: 'videos',
      }),
    {
      headers: { accept: 'application/json', Authorization: `Bearer ${token}` },
    }
  );
  if (!response.ok) {
    console.log('Response if error', await response.json());
    throw new Error('getMovieDetails api call error');
  }
  return await response.json();
}

export async function getMovieSimilarMovies(movieId = 0): Promise<MovieLists> {
  const url = process.env.API_BASE_URL;
  const token = process.env.API_TOKEN;

  const response = await fetch(
    `${url}/movie/${movieId}/similar?` +
      new URLSearchParams({
        movie_id: movieId.toString(),
        language: 'en-US',
        page: '1',
      }),
    {
      headers: { accept: 'application/json', Authorization: `Bearer ${token}` },
    }
  );
  if (!response.ok) {
    console.log('Response if error', await response.json());
    throw new Error('getMovieSimilarMovies api call error');
  }
  return await response.json();
}
