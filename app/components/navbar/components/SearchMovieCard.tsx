import React from 'react';
import Image from 'next/image';
import {
  ImageUrlBuilder,
  posterSizes,
} from '@/app/lib/tmdb/utils/images/imagesConfiguration';
import Paragraph from '@/app/components/typography/Paragraph';
import Link from 'next/link';

interface SearchMovieCardProps {
  id: number;
  posterUrl: string;
  title: string;
  year: string;
  setIsSearchActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function SearchMovieCard({
  posterUrl,
  title,
  year,
  id,
  setIsSearchActive,
}: SearchMovieCardProps) {
  const url = new ImageUrlBuilder()
    .setSizeConfig(posterSizes)
    .setImageSize('small')
    .setImageUrl(posterUrl)
    .build();

  return (
    <Link
      onClick={() => setIsSearchActive(false)}
      href={{ pathname: `/movies/${title}`, query: { movieId: id } }}
      className="flex gap-4 rounded-md bg-transparent hover:bg-gray-600"
    >
      <div className="flex h-full min-w-14 items-center justify-center">
        <Image
          src={url}
          className="h-auto w-auto rounded"
          alt={`${title} movie poster`}
          style={{ objectFit: 'cover' }}
          width={46}
          height={64}
        />
      </div>
      <div className="flex flex-col gap-2">
        <Paragraph text={title} size="regular" />
        <Paragraph text={year} size="small" color="gray" />
      </div>
    </Link>
  );
}
