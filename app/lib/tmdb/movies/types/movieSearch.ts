export interface MovieSearch {
  page: number;
  results: MovieSearchResults[];
  total_pages: number;
  total_results: number;
}

export interface MovieSearchResults {
  id: number;
  genre_ids: number[];
  title: string;
  poster_path: string;
  release_date: string;
  popularity: number;
}
