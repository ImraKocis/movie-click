import React, { ReactElement } from 'react';
import { Slider } from '@nextui-org/slider';
import { CheckboxGroup } from '@nextui-org/checkbox';
import { getMovieGenres } from '@/app/actions/movies/genres/actions';
import { useQuery } from '@tanstack/react-query';
import CustomCheckbox from '@/app/components/checkbox/CustomCheckbox';
import { IoMdClose } from 'react-icons/io';
import Paragraph from '@/app/components/typography/Paragraph';

export interface MoviesFilterProps {
  setYear: React.Dispatch<React.SetStateAction<number[]>>;
  setGenre: React.Dispatch<React.SetStateAction<number[]>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  setUiYear: React.Dispatch<React.SetStateAction<number[]>>;
  setUiScore: React.Dispatch<React.SetStateAction<number>>;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  genre: number[];
  uiYear: number[];
  uiScore: number;
}

export default function MoviesFilter({
  setScore,
  setGenre,
  setYear,
  setIsActive,
  setUiScore,
  setUiYear,
  uiScore,
  uiYear,
  genre,
}: MoviesFilterProps): ReactElement {
  const { data, error } = useQuery({
    queryKey: ['genres'],
    queryFn: () => getMovieGenres(),
  });

  if (error) console.log(error.message);
  return (
    <div className="absolute top-10 rounded bg-gray-800 p-6">
      <div
        className="mb-4 flex items-center justify-between text-gray-400"
        onClick={() => setIsActive(false)}
      >
        <Paragraph text={'movie filters'} color="gray" isAllCapital />
        <IoMdClose />
      </div>
      <div className="flex flex-col divide-y-2 divide-gray-900 ">
        <div className="mb-4">
          <Slider
            label="Score"
            step={0.1}
            size="sm"
            maxValue={10}
            minValue={1}
            defaultValue={1}
            value={uiScore}
            onChange={(value) =>
              typeof value == 'number' ? setUiScore(value) : null
            }
            onChangeEnd={(value) =>
              typeof value == 'number' ? setScore(value) : null
            }
            className="w-80 text-web-paragraph text-gray-400"
          />
        </div>
        <div className="mb-4">
          <Slider
            label="Year"
            step={1}
            maxValue={new Date().getFullYear()}
            formatOptions={{
              minimumIntegerDigits: 4,
              maximumFractionDigits: 0,
              useGrouping: false,
            }}
            minValue={1900}
            value={uiYear}
            onChange={(value) =>
              typeof value !== 'number' ? setUiYear(value) : null
            }
            defaultValue={[1900, new Date().getFullYear()]}
            onChangeEnd={(value) =>
              typeof value !== 'number' ? setYear(value) : null
            }
            className="mt-4 w-80 text-web-paragraph text-gray-400"
          />
        </div>
        <div>
          <CheckboxGroup
            className="mt-4"
            defaultValue={[]}
            value={genre?.map((g) => g.toString())}
            onValueChange={(values) =>
              setGenre(values.map((value) => parseInt(value)))
            }
          >
            <div className="grid grid-cols-2 gap-2 text-amber-500">
              {data?.genres.map((genre) => (
                <React.Fragment key={genre.id}>
                  <CustomCheckbox value={genre.id.toString()}>
                    {genre.name}
                  </CustomCheckbox>
                </React.Fragment>
              ))}
            </div>
          </CheckboxGroup>
        </div>
      </div>
    </div>
  );
}
