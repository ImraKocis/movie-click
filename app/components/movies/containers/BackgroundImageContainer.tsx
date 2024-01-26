import { ReactElement, ReactNode } from 'react';
import Image from 'next/image';
import coverImage from '../../../../public/mc-home-cover.jpg';
import {
  backdropSizes,
  ImageUrlBuilder,
} from '@/app/lib/tmdb/utils/images/imagesConfiguration';

interface BackgroundImageContainerProps {
  children: ReactNode;
  fulSizeImage?: boolean;
  blurImage?: boolean;
  backgroundImage?: string;
}
export default function BackgroundImageContainer({
  children,
  fulSizeImage = true,
  blurImage = true,
  backgroundImage,
}: BackgroundImageContainerProps): ReactElement {
  let imageFullUrl;
  if (backgroundImage)
    imageFullUrl = new ImageUrlBuilder()
      .setImageUrl(backgroundImage)
      .setImageSize('original')
      .setSizeConfig(backdropSizes)
      .build();

  return (
    <div className="relative flex flex-col">
      <div className="absolute top-0 w-full">
        <div
          className={`relative ${fulSizeImage ? 'h-screen' : 'h-[600px]'} max-w-full`}
        >
          <Image
            src={imageFullUrl ? imageFullUrl : coverImage}
            alt={'image'}
            fill
            className={
              !imageFullUrl || blurImage
                ? 'blur-md'
                : 'rounded-b-2xl backdrop-blur-md'
            }
            style={{
              objectPosition: fulSizeImage ? 'center' : 'top',
              objectFit: 'cover',
            }}
          />
          <div className="absolute bottom-[-20px] h-12 w-full rounded-t-2xl bg-transparent backdrop-blur-sm"></div>
        </div>
      </div>
      <div className="relative z-10 mt-56 flex flex-col items-center xl:mt-32">
        <div className="relative flex w-full max-w-wrapper--desktop flex-col px-4">
          {children}
        </div>
      </div>
    </div>
  );
}
