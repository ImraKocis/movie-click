import { ReactElement } from 'react';
import Heading from '@/app/components/typography/Heading';
import Paragraph from '@/app/components/typography/Paragraph';
import LinkButton from '@/app/components/button/LinkButton';
import image from '../../../../public/why-so-serious.jpg';
import Image from 'next/image';

export default function Error(): ReactElement {
  return (
    <div className="flex h-full w-full">
      <div className="mt-52 flex w-full xl:mt-32">
        <div className="max-w-wrapper--desktop-half mx-auto w-full basis-1/2 px-6">
          <div className="flex flex-col gap-12 py-36 md:py-40 xl:py-52">
            <div>
              <Heading text="Application error" level="h1" color="white" />
              <Paragraph
                text="Application error has occured please try again"
                color="gray"
              />
            </div>
            <div className="flex">
              <LinkButton link="/" text="Go back" style="secondary" />
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
