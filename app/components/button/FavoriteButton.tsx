import React, { ReactElement } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

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
      className="flex p-2 justify-center items-center min-h-12 min-w-12"
    >
      {isFavorite ? (
        <FaHeart className="w-full h-full" />
      ) : (
        <FaRegHeart className="w-full h-full" />
      )}
    </button>
  );
}
