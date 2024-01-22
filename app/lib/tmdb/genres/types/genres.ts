export interface Genres {
  genres: Genre[];
}

interface Genre {
  id: number;
  name: string;
}

export type MovieGenresTypes =
  | 'Action'
  | 'Adventure'
  | 'Animation'
  | 'Comedy'
  | 'Western'
  | 'War'
  | 'Thriller'
  | 'TV Movie'
  | 'Science Fiction'
  | 'Romance'
  | 'Mystery'
  | 'Music'
  | 'Horror'
  | 'History'
  | 'Fantasy'
  | 'Family'
  | 'Drama'
  | 'Documentary'
  | 'Crime';
