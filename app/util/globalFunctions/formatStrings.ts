/**
 * @param score number, movie score
 * @param count number, total votes
 * @return string, in format 8.8 (90k)
 * */
export const getScoreString = (score: number, count: number): string => {
  return `${Math.round(score * 10) / 10} ${handleCount(count)}`;
};

const handleCount = (count: number): string => {
  if (count >= 1000) return `(${Math.round(count / 1000)}k)`;
  return `(${count})`;
};
