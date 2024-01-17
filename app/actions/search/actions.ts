'use server';

import { MovieSearch } from '@/app/lib/tmdb/movies/types/movieSearch';

export async function getSearchResults(
  query: string
): Promise<MovieSearch | undefined> {
  const url = process.env.API_BASE_URL;
  const token = process.env.API_TOKEN;

  const response = await fetch(
    `${url}/search/movie?` +
      new URLSearchParams({
        query: query,
      }),
    {
      headers: { accept: 'application/json', Authorization: `Bearer ${token}` },
    }
  );
  if (response.ok) {
    return await response.json();
  }
}
