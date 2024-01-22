import MovieImageCard, {
  MovieImageCardProps,
} from '@/app/components/movies/MovieImageCard';
import React from 'react';
import { ReactElement } from 'react';
import './styles/movieImageCardSlider.css';

interface MovieImageCardSliderProps {
  cards: MovieImageCardProps[];
}

export default function MovieImageCardSlider({
  cards,
}: MovieImageCardSliderProps): ReactElement {
  return (
    <div className="flex w-full snap-x snap-mandatory overflow-x-auto scrollbar-hide">
      {cards.map((card, index) => (
        <React.Fragment key={index}>
          <MovieImageCard
            id={card.id}
            movieNumber={card.movieNumber}
            movieImageUrl={card.movieImageUrl}
            movieTitle={card.movieTitle}
          />
        </React.Fragment>
      ))}
    </div>
  );
}
