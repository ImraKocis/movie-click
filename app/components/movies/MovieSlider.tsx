'use client';
import React, {
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import './styles/movieImageCardSlider.css';
import { useWindowWidth } from '@/app/hooks/useWindowWidth';

export default function MovieSlider({
  children,
}: {
  children: ReactNode;
}): ReactElement {
  const [current, setCurrent] = useState<number>(0);
  const slider = useRef<HTMLDivElement>(null);
  const maxScrollWidth = useRef(0);
  const windowWidth = useWindowWidth(0);

  const handleNext = () => {
    if (
      slider.current !== null &&
      slider.current.offsetWidth * current <= maxScrollWidth.current
    )
      setCurrent((prevState) => prevState + 1);
  };

  const handlePrevious = () => {
    if (current > 0) setCurrent((prevState) => prevState - 1);
  };
  const isDisabled = (direction: 'prev' | 'next') => {
    if (direction === 'prev') return current <= 0;
    if (direction === 'next' && slider.current !== null)
      return slider.current.offsetWidth * current >= maxScrollWidth.current;
    return false;
  };

  useEffect(() => {
    if (slider !== null && slider.current !== null) {
      slider.current.scrollLeft = slider.current.offsetWidth * current;
    }
  }, [current]);

  useEffect(() => {
    maxScrollWidth.current = slider.current
      ? slider.current.scrollWidth - slider.current.offsetWidth
      : 0;
  }, [windowWidth]);

  return (
    <div className="w-full px-2 py-4">
      <div className="scrollbar-hide group/carousel relative flex overflow-x-auto 2xl:overflow-hidden">
        <button
          onClick={handlePrevious}
          disabled={isDisabled('prev')}
          className="prev-arrow flex h-full w-10 items-center justify-center text-mobile-title-2 text-white disabled:pointer-events-none disabled:bg-transparent disabled:opacity-0 group-hover/carousel:bg-zinc-900 md:text-web-title-2"
        >
          <IoIosArrowBack />
        </button>
        <div
          ref={slider}
          className="scrollbar-hide flex snap-x snap-mandatory overflow-x-auto scroll-smooth 2xl:overflow-hidden"
        >
          {children}
        </div>
        <button
          onClick={handleNext}
          disabled={isDisabled('next')}
          className="next-arrow right-0 flex h-full w-10 items-center justify-center text-mobile-title-3 text-white disabled:pointer-events-none disabled:bg-transparent disabled:opacity-0 group-hover/carousel:bg-zinc-900 md:text-web-title-2"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
}
