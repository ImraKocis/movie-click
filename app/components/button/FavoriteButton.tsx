import React, { ReactElement } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

export interface FavoriteButtonProps {
  onClick: () => void;
  isFavorite: boolean;
}

export default function FavoriteButton({
  isFavorite,
  onClick,
}: FavoriteButtonProps): ReactElement {
  return (
    <button
      onClick={onClick}
      className="flex min-h-12 min-w-12 items-center justify-center p-2"
    >
      {isFavorite ? (
        <FaHeart className="h-full w-full" />
      ) : (
        <FaRegHeart className="h-full w-full" />
      )}
    </button>
  );
}
