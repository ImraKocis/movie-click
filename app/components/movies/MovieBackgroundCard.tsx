import { ReactElement } from 'react';
import Image from 'next/image';
import {
  backdropSizes,
  ImageUrlBuilder,
} from '@/app/lib/tmdb/utils/images/imagesConfiguration';

export interface MovieBackgroundCardProps {
  id: number;
  imageUrl: string;
  backgroundImageUrl: string;
  title: string;
  voteAverage: number;
  totalVotes: number;
  description: string;
}

export default function MovieBackgroundCard({
  id,
  backgroundImageUrl,
  imageUrl,
  voteAverage,
  totalVotes,
  description,
  title,
}: MovieBackgroundCardProps): ReactElement {
  const backgroundImage = new ImageUrlBuilder()
    .setImageUrl(backgroundImageUrl)
    .setSizeConfig(backdropSizes)
    .setImageSize('large')
    .build();

  return (
    <div className="w-full rounded-lg p-20">
      <div className="relative">
        <Image
          src={backgroundImage}
          alt={`${title} background image`}
          fill
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
        <div className="relative flex">Image</div>
      </div>
    </div>
  );
}
