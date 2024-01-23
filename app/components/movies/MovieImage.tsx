import { ReactElement } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  ImageUrlBuilder,
  posterSizes,
} from '@/app/lib/tmdb/utils/images/imagesConfiguration';

interface MovieImageProps {
  id: number;
  imageUrl: string;
  title: string;
}

export default function MovieImage({
  id,
  imageUrl,
  title,
}: MovieImageProps): ReactElement {
  const imageFullUrl = new ImageUrlBuilder()
    .setImageUrl(imageUrl)
    .setSizeConfig(posterSizes)
    .setImageSize('large')
    .build();
  return (
    <Link
      href={{ pathname: `/movies/${title}`, query: { movieId: id } }}
      className="block"
    >
      {/*// https://github.com/vercel/next.js/issues/40762#issuecomment-1441895105*/}
      <Image
        src={imageFullUrl}
        alt={`${title} poster`}
        width={190}
        height={270}
        className="h-auto w-auto rounded"
        priority
      />
    </Link>
  );
}
