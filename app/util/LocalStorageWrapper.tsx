'use client';

import React, { ReactElement, ReactNode, useEffect } from 'react';
import { LocalStorageFavorites } from '@/app/lib/localStorage/types';
import { useDispatch } from 'react-redux';
import { set } from '@/app/lib/redux/features/localStorage/localStorageSlice';

export default function LocalStorageWrapper({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const dispatch = useDispatch();
  const getDataFromStorage = () => {
    if (typeof window !== 'undefined') {
      const localStorageData: LocalStorageFavorites[] = JSON.parse(
        localStorage.getItem('favoriteMoviesIds')!
      );
      dispatch(set(localStorageData));
    }
  };
  useEffect(() => {
    getDataFromStorage();
  }, []);
  return <>{children}</>;
}
