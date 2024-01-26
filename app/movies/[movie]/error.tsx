'use client';
import Error from '../../components/error/components/Error';
import { ReactNode } from 'react';
export default function MovieDetailPageError({
  reset,
}: {
  reset: () => void;
}): ReactNode {
  return (
    <Error
      message="Movie not found please go back"
      heading="404 Move dose not exists"
      onClick={reset}
    />
  );
}
