'use client';
import React, { ReactElement, useEffect, useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItem,
  deleteItem,
  selectLocalStorage,
} from '@/app/lib/redux/features/localStorage/localStorageSlice';

export interface FavoriteButtonProps {
  movie: FavoriteButtonMovieProps;
}

interface FavoriteButtonMovieProps {
  id: number;
  title: string;
  releaseDate: string;
  score: number;
  posterUrl: string;
}

export default function FavoriteButton({
  movie,
}: FavoriteButtonProps): ReactElement {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const [isButtonPressed, setIsButtonPressed] = useState<boolean>(false);
  const dispatch = useDispatch();
  const favoriteMovies = useSelector(selectLocalStorage);
  useEffect(() => {
    checkIfMovieIsFavorite(movie.id);
  }, [isButtonPressed, movie, favoriteMovies]);

  const checkIfMovieIsFavorite = (movieId: number) => {
    if (favoriteMovies?.some((movie) => movie.id == movieId.toString())) {
      setIsFavorite(true);
    } else {
      setIsFavorite(false);
    }
  };

  const handleFavoriteButtonPress = (
    currentMovie: FavoriteButtonMovieProps
  ) => {
    if (
      favoriteMovies?.some((movie) => movie.id == currentMovie.id.toString())
    ) {
      const moveToRemove = favoriteMovies.find(
        (movie) => movie.id == currentMovie.id.toString()
      );
      dispatch(deleteItem(moveToRemove!));
    } else {
      dispatch(
        addItem({
          id: movie.id.toString(),
          title: movie.title,
          year: movie.releaseDate,
          score: movie.score.toString(),
          posterUrl: movie.posterUrl,
        })
      );
    }
  };

  return (
    <button
      onClick={() => {
        handleFavoriteButtonPress(movie);
        setIsButtonPressed(!isButtonPressed);
      }}
      className="flex min-h-12 min-w-12 items-center justify-center p-2 text-yellow-300"
    >
      {isFavorite ? (
        <FaHeart className="h-full w-full" />
      ) : (
        <FaRegHeart className="h-full w-full" />
      )}
    </button>
  );
}
