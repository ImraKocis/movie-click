import { ReactElement } from 'react';
import {
  ImageUrlBuilder,
  posterSizes,
} from '@/app/lib/tmdb/utils/images/imagesConfiguration';
import Link from 'next/link';
import Image from 'next/image';
import FavoriteButton from '@/app/components/button/FavoriteButton';

export interface MovieImageCardProps {
  id: number;
  movieImageUrl: string;
  movieTitle: string;
  movieScore: number;
  movieReleaseDate: string;
  activateFavoriteButton?: boolean;
}
export default function MovieImageCard({
  id,
  movieImageUrl,
  movieTitle,
  movieReleaseDate,
  movieScore,
  activateFavoriteButton = true,
}: MovieImageCardProps): ReactElement {
  const imageUrl = new ImageUrlBuilder()
    .setSizeConfig(posterSizes)
    .setImageUrl(movieImageUrl)
    .setImageSize('large')
    .build();
  return (
    <div className="relative">
      <Link
        href={{ pathname: `/movies/${movieTitle}`, query: { movieId: id } }}
        className="relative flex min-h-[270px] min-w-[208px] items-end bg-transparent px-4 max-xl:snap-start"
      >
        <div className="flex h-fit min-w-52 overflow-hidden">
          <Image
            src={imageUrl}
            alt={`${movieTitle} poster`}
            width={208}
            height={270}
            className="rounded"
            style={{ objectFit: 'cover', width: 'auto', height: 'auto' }}
          />
        </div>
      </Link>
      {activateFavoriteButton ? (
        <div className="absolute bottom-0 right-1 z-50 p-4">
          <FavoriteButton
            movie={{
              id: id,
              releaseDate: movieReleaseDate,
              score: movieScore,
              posterUrl: imageUrl,
              title: movieTitle,
            }}
          />
        </div>
      ) : null}
    </div>
  );
}
