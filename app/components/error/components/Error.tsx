import { ReactElement } from 'react';
import Heading from '@/app/components/typography/Heading';
import Paragraph from '@/app/components/typography/Paragraph';
import LinkButton from '@/app/components/button/LinkButton';
import image from '../../../../public/why-so-serious.jpg';
import Image from 'next/image';
import Button from '@/app/components/button/Button';

export default function Error({
  heading,
  message,
  onClick,
}: {
  message?: string;
  heading?: string;
  onClick?: () => void;
}): ReactElement {
  return (
    <div className="flex h-full w-full">
      <div className="mt-52 flex w-full xl:mt-32">
        <div className="mx-auto w-full max-w-wrapper--desktop-half basis-1/2 px-6">
          <div className="flex flex-col gap-12 py-36 md:py-40 xl:py-52">
            <div>
              <Heading
                text={heading ? heading : 'Application error'}
                level="h1"
                color="white"
              />
              <Paragraph
                text={
                  message
                    ? message
                    : 'Application error has occurred please try again'
                }
                color="gray"
              />
            </div>
            <div className="flex">
              {onClick ? (
                <Button
                  text="Try again"
                  style="secondary"
                  onClick={() => {
                    onClick();
                  }}
                />
              ) : (
                <LinkButton link="/" text="Go back" style="secondary" />
              )}
            </div>
          </div>
        </div>
        <div className="relative w-full basis-1/2">
          <Image
            src={image}
            alt={'Error image'}
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
      </div>
    </div>
  );
}
