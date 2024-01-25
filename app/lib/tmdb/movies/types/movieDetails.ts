export interface MovieDetails {
  id: number;
  original_title: string;
  title: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  genres: MovieGenre[];
  runtime: number;
  production_companies: ProductionCompanies[];
  release_date: string;
  vote_average: number;
  vote_count: number;
  videos: VideoResults;
  production_countries: ProductionCountries[];
}
interface ProductionCompanies {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
interface MovieGenre {
  id: number;
  name: string;
}
interface Video {
  site: string;
  type: VideoType;
  key: string;
}

interface VideoResults {
  results: Video[];
}

interface ProductionCountries {
  iso_3166_1: string;
  name: string;
}

type VideoType = 'Trailer' | 'Behind the Scenes';
