import { ReactElement } from 'react';
import Image from 'next/image';
import {
  ImageUrlBuilder,
  posterSizes,
} from '@/app/lib/tmdb/utils/images/imagesConfiguration';
import Link from 'next/link';
import FavoriteButton from '@/app/components/button/FavoriteButton';

export interface MovieNumberImageCardProps {
  id: number;
  movieNumber: number;
  movieImageUrl: string;
  movieTitle: string;
  movieScore: number;
  movieReleaseDate: string;
}

export default function MovieNumberImageCard({
  id,
  movieImageUrl,
  movieNumber,
  movieTitle,
  movieReleaseDate,
  movieScore,
}: MovieNumberImageCardProps): ReactElement {
  const imageUrl = new ImageUrlBuilder()
    .setSizeConfig(posterSizes)
    .setImageUrl(movieImageUrl)
    .setImageSize('large')
    .build();
  return (
    <div className="relative">
      <Link
        href={{ pathname: `/movies/${movieTitle}`, query: { movieId: id } }}
        className="relative flex min-h-[300px] min-w-[270px] items-end bg-transparent px-4 max-xl:snap-start"
      >
        <p className="flex text-[180px] font-bold leading-[100%] tracking-[-20px] text-gray-400">
          {movieNumber}
        </p>
        <div className="flex h-full w-52">
          <Image
            src={imageUrl}
            alt={`${movieTitle} poster`}
            width={210}
            height={270}
            className="rounded"
            style={{ objectFit: 'cover' }}
          />
        </div>
      </Link>
      <div className="absolute bottom-0 right-2 z-50 p-4">
        <FavoriteButton
          movie={{
            id: id,
            year: movieReleaseDate,
            score: movieScore,
            posterUrl: imageUrl,
            title: movieTitle,
          }}
        />
      </div>
    </div>
  );
}
