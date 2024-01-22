'use client';
import { ReactElement } from 'react';
import Image from 'next/image';
import {
  ImageUrlBuilder,
  posterSizes,
} from '@/app/lib/tmdb/utils/images/imagesConfiguration';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

export interface MovieImageCardProps {
  id: number;
  movieNumber: number;
  movieImageUrl: string;
  movieTitle: string;
}

export default function MovieImageCard({
  id,
  movieImageUrl,
  movieNumber,
  movieTitle,
}: MovieImageCardProps): ReactElement {
  const { ref, inView } = useInView();
  const imageUrl = new ImageUrlBuilder()
    .setSizeConfig(posterSizes)
    .setImageUrl(movieImageUrl)
    .setImageSize('large')
    .build();
  return (
    <Link
      href={{ pathname: `/movies/${movieTitle}`, query: { movieId: id } }}
      className="relative flex min-h-[300px] min-w-[270px] items-end bg-transparent px-4 max-xl:snap-start"
    >
      <p className="flex text-[180px] font-bold leading-[100%] tracking-[-20px] text-gray-400">
        {movieNumber}
      </p>
      <div className="flex h-fit min-w-52 overflow-hidden">
        <Image
          ref={ref}
          src={imageUrl}
          alt={`${movieTitle} poster`}
          width={190}
          height={270}
          className="rounded"
          style={{ objectFit: 'cover' }}
          priority
        />
      </div>
    </Link>
  );
}
