import React, { ReactElement } from 'react';
import Heading from '@/app/components/typography/Heading';
import Paragraph from '@/app/components/typography/Paragraph';
import Search from '@/app/components/navbar/components/Search';
import Link from 'next/link';
import FavoriteDropdownClientWrapper from '@/app/components/navbar/components/FavoriteDropdownClientWrapper';

export default function Navbar(): ReactElement {
  return (
    <div className="fixed left-0 right-0 top-0 z-[999] bg-gray-900 ">
      <div className="relative mx-auto flex max-w-wrapper--desktop flex-col items-center gap-6 px-4 py-2 xl:flex-row">
        <Link href={'/'}>
          <Heading
            text="MovieClick"
            level="h2"
            color="yellow"
            style="regular"
          />
        </Link>
        <div className="flex gap-6">
          <Link href={'/movies'}>
            <Paragraph
              text="Discover"
              color="gray"
              size="regular"
              changeColorOnHover={true}
            />
          </Link>
          <Link href={'/movies/popular'}>
            <Paragraph
              text="Popular"
              color="gray"
              size="regular"
              changeColorOnHover={true}
            />
          </Link>
        </div>
        <div className="flex w-full items-center gap-2">
          <FavoriteDropdownClientWrapper />
          <div className="group/search flex w-full basis-1/2 justify-end">
            <Search />
          </div>
        </div>
      </div>
    </div>
  );
}
