import React, { ReactElement } from 'react';
import Heading from '@/app/components/typography/Heading';
import Paragraph from '@/app/components/typography/Paragraph';
import Search from '@/app/components/navbar/components/Search';
import { IoIosArrowDown } from 'react-icons/io';
import FavoritesDropdown from '@/app/components/navbar/components/FavoritesDropdown';
import Link from 'next/link';

export default function Navbar(): ReactElement {
  return (
    <div className="relative mx-auto flex w-full max-w-wrapper--desktop flex-col items-center gap-6 bg-black px-6 py-2 md:flex-row md:px-16">
      <Link href={'/'}>
        <Heading text="MovieClick" level="h2" color="yellow" style="regular" />
      </Link>
      <div className="flex w-full items-center">
        <div className="group block basis-1/2 md:relative">
          <div className="flex items-center gap-1 text-gray-400">
            <IoIosArrowDown className="transition delay-150 group-hover:rotate-180 group-hover:text-white" />
            <Paragraph
              text="Favorites"
              color="gray"
              size="regular"
              changeColorOnHover={true}
              isPartOfCssGroup={true}
            />
          </div>
          <FavoritesDropdown />
        </div>
        <div className="group/search flex w-full basis-1/2 justify-end">
          <Search />
        </div>
      </div>
    </div>
  );
}
