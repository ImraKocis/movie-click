'use client';
import React, { ReactElement } from 'react';
import Image from 'next/image';
import Paragraph from '@/app/components/typography/Paragraph';
import Link from 'next/link';
import {
  ImageUrlBuilder,
  posterSizes,
} from '@/app/lib/tmdb/utils/images/imagesConfiguration';
import FavoriteButton from '@/app/components/button/FavoriteButton';

interface FavoriteMovieCardProps {
  id: number;
  title: string;
  year: string;
  score: number;
  posterUrl: string;
}
export default function FavoriteMovieCard({
  id,
  score,
  posterUrl,
  year,
  title,
}: FavoriteMovieCardProps): ReactElement {
  const url = new ImageUrlBuilder()
    .setSizeConfig(posterSizes)
    .setImageSize('small')
    .setImageUrl(posterUrl)
    .build();

  return (
    <Link
      href={{ pathname: `/movies/${title}`, query: { movieId: id } }}
      className="flex justify-between rounded-md bg-transparent px-2 hover:bg-gray-600"
    >
      <div className="flex gap-4">
        <div className="flex h-24 w-16 items-center justify-center">
          <Image
            src={url}
            className="w-auto rounded"
            alt={`${title} favorite movie poster`}
            style={{ objectFit: 'cover' }}
            width={60}
            height={96}
            priority={true}
          />
        </div>
        <div className="flex flex-col gap-2">
          <Paragraph text={title} size="regular" />
          <Paragraph
            text={`${Math.round(score * 100) / 100}/10`}
            size="small"
            color="gray"
          />
          <Paragraph text={year} size="small" color="gray" />
        </div>
      </div>
      <div className="self-end">
        <FavoriteButton
          movie={{
            id: id,
            title: title,
            posterUrl: posterUrl,
            year: year,
            score: score,
          }}
        />
      </div>
    </Link>
  );
}
