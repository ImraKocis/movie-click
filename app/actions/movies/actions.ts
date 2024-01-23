'use server';
import { MovieLists } from '@/app/lib/tmdb/movies/types/movieLists';

export async function getPopularMovies({
  pageParam = 1,
  year = ['1900', new Date().getFullYear().toString()],
  genres = '',
  score = 1,
}): Promise<MovieLists> {
  const url = process.env.API_BASE_URL;
  const token = process.env.API_TOKEN;
  const date = new Date();
  const today = `${date.getFullYear()}-${date.getMonth().toString().length == 1 ? '0' + (date.getMonth() + 1).toString() : date.getMonth() + 1}-${date.getDate()}`;
  const response = await fetch(
    `${url}/discover/movie?` +
      new URLSearchParams({
        'primary_release_date.gte': `${year[0]}-01-01`,
        'primary_release_date.lte':
          year[1] == '2024' ? `${today}` : `${year[1]}-12-31`,
        'vote_average.gte': score.toString(),
        'vote_average.lte': '10',
        'vote_count.gte': '1000',
        with_genres: genres,
        include_adult: 'false',
        sort_by: 'popularity.desc',
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
  return await response.json();
}

export async function getNewestMovies(): Promise<MovieLists> {
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

  return await response.json();
}
