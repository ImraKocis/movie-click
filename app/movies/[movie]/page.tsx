interface SearchParams {
  searchParams: {
    movieId: number;
  };
}

export default function MovieDetailsPage({ searchParams }: SearchParams) {
  return <div>{searchParams.movieId}</div>;
}
