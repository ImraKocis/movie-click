'use client';
import { ReactElement, useState } from 'react';
import { IoIosPlay } from 'react-icons/io';

interface YouTubeVideoProps {
  trailerKey: string;
}
export default function YouTubeVideo({
  trailerKey,
}: YouTubeVideoProps): ReactElement {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <div className="mb-14 xl:mb-12">
      {trailerKey ? (
        <div className="mx-auto h-[300px] w-full max-w-movie-detail-card md:h-[350px] lg:h-[400px] xl:h-[450px]">
          {isClicked ? (
            <iframe
              src={`https://www.youtube.com/embed/${trailerKey}?autoplay=1`}
              allow="autoplay"
              width={'100%'}
              height={'100%'}
              allowFullScreen={false}
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <button
                onClick={() => setIsClicked(true)}
                className="pointer-events-auto h-12 w-16 rounded bg-gray-800 p-2 text-yellow-400"
              >
                <IoIosPlay className="h-full w-full" />
              </button>
            </div>
          )}
        </div>
      ) : null}
    </div>
  );
}
