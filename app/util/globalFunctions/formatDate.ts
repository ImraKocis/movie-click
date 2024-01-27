/**
 * Format function for any date
 * @param sDate string date example "22-01-2024"
 * @return dd.mm.yyyy date format in string
 * */
export const formatDate = (sDate: string) => {
  const date = new Date(sDate);
  return `${formatDayAndMonth(date.getDate())}.${formatDayAndMonth(date.getMonth() + 1)}.${date.getFullYear()}`;
};

/**
 * Format function for api date
 * @param date Date value to format
 * @return yyyy-mm-dd date format in string
 * */
export const formatDateForApi = (date: Date): string => {
  return `${date.getFullYear()}-${formatDayAndMonth(date.getMonth() + 1)}-${formatDayAndMonth(date.getDate())}`;
};

/**
 * Format feature date for api
 * @param daysInFeature number of days in feature for calculation from today
 * @return yyyy-mm-dd date format in string
 * */
export const getDateForApiInFuture = (daysInFeature: number): string => {
  const today = new Date();
  const oneDay = 1000 * 3600 * 24;
  const featureDate = new Date(today.getTime() + oneDay * daysInFeature);
  return `${featureDate.getFullYear()}-${formatDayAndMonth(featureDate.getMonth() + 1)}-${formatDayAndMonth(featureDate.getDate())}`;
};

const formatDayAndMonth = (element: number): string => {
  if (element.toString().length == 1) return `0${element}`;
  return element.toString();
};
