import { ReactElement, useEffect, useState } from 'react';
import Link from 'next/link';
import NextImage from 'next/image';
import { Image } from '@nextui-org/image';
import {
  ImageUrlBuilder,
  posterSizes,
} from '@/app/lib/tmdb/utils/images/imagesConfiguration';
import FavoriteButton from '@/app/components/button/FavoriteButton';

interface MovieImageProps {
  id: number;
  imageUrl: string;
  title: string;
  year: string;
  score: number;
}

export default function MovieImage({
  id,
  imageUrl,
  title,
  year,
  score,
}: MovieImageProps): ReactElement {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [loadingImage, setLoadingImage] = useState<number | null>(null);
  const imageFullUrl = new ImageUrlBuilder()
    .setImageUrl(imageUrl)
    .setSizeConfig(posterSizes)
    .setImageSize('large')
    .build();
  return (
    <div className="relative">
      <Link
        href={{ pathname: `/movies/${title}`, query: { movieId: id } }}
        className="realative block"
      >
        {/*// https://github.com/vercel/next.js/issues/40762#issuecomment-1441895105*/}
        <Image
          onMouseEnter={() => setHoveredId(id)}
          onMouseLeave={() => setHoveredId(null)}
          as={NextImage}
          src={imageFullUrl}
          alt={`${title} poster`}
          width={220}
          height={300}
          style={{ width: 'auto', height: 'auto' }}
          radius="md"
          shadow="lg"
          isZoomed={id == hoveredId}
          onLoad={() => setLoadingImage(id)}
        />
      </Link>
      <div className="absolute bottom-0 right-0 z-50 p-4">
        {loadingImage == id ? (
          <FavoriteButton
            movie={{
              id: id,
              year: year,
              score: score,
              posterUrl: imageUrl,
              title: title,
            }}
          />
        ) : null}
      </div>
    </div>
  );
}
