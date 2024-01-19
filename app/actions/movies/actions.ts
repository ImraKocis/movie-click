'use server';
import { MovieLists } from '@/app/lib/tmdb/movies/types/movieLists';

// interface Test {
//   pageParams: number | undefined;
// }
export async function getPopularMovies({ pageParam = 1 }): Promise<MovieLists> {
  const url = process.env.API_BASE_URL;
  const token = process.env.API_TOKEN;
  console.log(pageParam);

  const response = await fetch(
    `${url}/movie/popular?` +
      new URLSearchParams({
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

export async function getNewestMovies(): Promise<MovieLists | undefined> {
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
  if (response.ok) {
    return await response.json();
  }
}
