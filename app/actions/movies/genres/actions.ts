'use server';
import { Genres } from '@/app/lib/tmdb/genres/types/genres';

export async function getMovieGenres(): Promise<Genres> {
  const url = process.env.API_BASE_URL;
  const token = process.env.API_TOKEN;

  const response = await fetch(`${url}/genre/movie/list?`, {
    headers: { accept: 'application/json', Authorization: `Bearer ${token}` },
  });

  return await response.json();
}
