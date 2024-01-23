export const formatDate = (sDate: string) => {
  const date = new Date(sDate);
  return `${formatDayAndMonth(date.getDate())}.${formatDayAndMonth(date.getMonth() + 1)}.${date.getFullYear()}`;
};

const formatDayAndMonth = (element: number): string => {
  if (element.toString().length == 1) return `0${element}`;
  return element.toString();
};
