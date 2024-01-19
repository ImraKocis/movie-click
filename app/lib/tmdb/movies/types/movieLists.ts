export interface MovieLists {
  page: number;
  results: MovieListsResultsProps[];
  total_pages: number;
  total_results: number;
}

export interface MovieListsResultsProps {
  id: number;
  genre_ids: number[];
  original_title: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  vote_average: number;
}
