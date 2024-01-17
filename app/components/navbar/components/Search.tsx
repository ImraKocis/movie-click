'use client';
import React, { ReactElement, useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import SearchResults from '@/app/components/navbar/components/SearchResults';
import { useQuery } from '@tanstack/react-query';
import { getSearchResults } from '@/app/actions/search/actions';

export default function Search(): ReactElement {
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const { data, error, isFetched } = useQuery({
    queryKey: ['search', searchValue],
    queryFn: () => getSearchResults(searchValue),
    enabled: !!searchValue,
  });
  const handleSearch = (search: string) => {
    setSearchValue(search);
  };
  if (error) console.log(error.message);
  return (
    <div className="max-w-navbar--desktop pointer-events-auto relative block w-full flex-col rounded-t bg-gray-800">
      <div className="flex w-full items-center px-6 py-1">
        <div className="flex h-8 w-8 items-center text-gray-400">
          <FaSearch />
        </div>
        <div className="grow">
          <input
            type="text"
            className="w-full border-0 bg-gray-800 text-gray-400 outline-none"
            placeholder="Seacrh"
            onClick={() => setIsSearchActive(true)}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
      </div>
      {isSearchActive ? (
        <SearchResults movies={data} setIsSearchActive={setIsSearchActive} />
      ) : null}
    </div>
  );
}
